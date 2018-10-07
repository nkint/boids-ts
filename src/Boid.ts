import {
  vec2,
  create as createVector,
  set,
  add,
  scale,
  limit,
  sub,
  normalize,
  dist,
  div,
  len,
} from 'gl-vec2'
import { RandomSeed, create as createRandom } from 'random-seed'

const randomGenerator: RandomSeed = createRandom('dudee')

const random = randomGenerator.floatBetween

export class Boid {
  acceleration: vec2
  velocity: vec2
  position: vec2
  r: number
  maxspeed: number
  maxforce: number
  width: number
  height: number

  constructor(centerX: number, centerY: number, canvasWidth: number, canvasHeight: number) {
    this.acceleration = set(createVector(), 0, 0)
    this.velocity = set(createVector(), random(-1, 1), random(-1, 1))
    this.position = set(createVector(), centerX, centerY)
    this.r = 3.0
    this.maxspeed = 3 // Maximum speed
    this.maxforce = 0.05 // Maximum steering force
    this.width = canvasWidth
    this.height = canvasHeight
  }

  run(boids: Array<Boid>) {
    this.flock(boids)
    this.update()
    this.borders()
  }

  applyForce(force: vec2) {
    // We could add mass here if we want A = F / M
    // this.acceleration.add(force)
    add(this.acceleration, this.acceleration, force)
  }

  // We accumulate a new acceleration each time based on three rules
  flock(boids: Array<Boid>) {
    let sep = this.separate(boids) // Separation
    let ali = this.align(boids) // Alignment
    let coh = this.cohesion(boids) // Cohesion
    // Arbitrarily weight these forces
    scale(sep, sep, 1.5)
    scale(ali, ali, 1.0)
    scale(coh, coh, 1.0)
    // Add the force vectors to acceleration
    this.applyForce(sep)
    this.applyForce(ali)
    this.applyForce(coh)
  }

  // Method to update location
  update() {
    // Update velocity
    add(this.velocity, this.velocity, this.acceleration)
    // Limit speed
    limit(this.velocity, this.velocity, this.maxspeed)
    add(this.position, this.position, this.velocity)
    // Reset accelertion to 0 each cycle
    scale(this.acceleration, this.acceleration, 0)
  }

  // A method that calculates and applies a steering force towards a target
  // STEER = DESIRED MINUS VELOCITY
  seek(target: vec2) {
    let desired = sub([], target, this.position) // A vector pointing from the location to the target
    // Normalize desired and scale to maximum speed
    normalize(desired, desired)
    scale(desired, desired, this.maxspeed)
    // Steering = Desired minus Velocity
    let steer = sub([], desired, this.velocity)
    limit(steer, steer, this.maxforce) // Limit to maximum steering force
    return steer
  }

  render() {
    // // Draw a triangle rotated in the direction of velocity
    // let theta = this.velocity.heading() + radians(90)
    // fill(127)
    // stroke(200)
    // push()
    // translate(this.position.x, this.position.y)
    // rotate(theta)
    // beginShape()
    // vertex(0, -this.r * 2)
    // vertex(-this.r, this.r * 2)
    // vertex(this.r, this.r * 2)
    // endShape(CLOSE)
    // pop()
  }

  // Wraparound
  borders() {
    if (this.position[0] < -this.r) this.position[0] = this.width + this.r
    if (this.position[1] < -this.r) this.position[1] = this.height + this.r
    if (this.position[0] > this.width + this.r) this.position[0] = -this.r
    if (this.position[1] > this.height + this.r) this.position[1] = -this.r
  }

  // Separation
  // Method checks for nearby boids and steers away
  separate(boids: Array<Boid>) {
    let desiredseparation = 25.0
    let steer = set(createVector(), 0, 0)
    let count = 0
    // For every boid in the system, check if it's too close
    for (let i = 0; i < boids.length; i++) {
      let d = dist(this.position, boids[i].position)
      // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
      if (d > 0 && d < desiredseparation) {
        // Calculate vector pointing away from neighbor
        let diff = sub([], this.position, boids[i].position)
        normalize(diff, diff)
        scale(diff, diff, 1 / d) // Weight by distance
        add(steer, steer, diff)
        count++ // Keep track of how many
      }
    }
    // Average -- divide by how many
    if (count > 0) {
      scale(steer, steer, 1 / count)
    }

    // As long as the vector is greater than 0
    if (len(steer) > 0) {
      // Implement Reynolds: Steering = Desired - Velocity
      normalize(steer, steer)

      scale(steer, steer, this.maxspeed)
      sub(steer, steer, this.velocity)
      limit(steer, steer, this.maxforce)
    }
    return steer
  }

  // Alignment
  // For every nearby boid in the system, calculate the average velocity
  align(boids: Array<Boid>) {
    let neighbordist = 50
    let sum = set(createVector(), 0, 0)
    let count = 0
    for (let i = 0; i < boids.length; i++) {
      let d = dist(this.position, boids[i].position)
      if (d > 0 && d < neighbordist) {
        add(sum, sum, boids[i].velocity)
        count++
      }
    }
    if (count > 0) {
      scale(sum, sum, 1 / count)
      normalize(sum, sum)
      scale(sum, sum, this.maxspeed)
      let steer = sub(sum, sum, this.velocity)
      limit(steer, steer, this.maxforce)
      return steer
    } else {
      return set(createVector(), 0, 0)
    }
  }

  // Cohesion
  // For the average location (i.e. center) of all nearby boids, calculate steering vector towards that location
  cohesion(boids: Array<Boid>) {
    let neighbordist = 50
    let sum = set(createVector(), 0, 0) // Start with empty vector to accumulate all locations
    let count = 0
    for (let i = 0; i < boids.length; i++) {
      let d = dist(this.position, boids[i].position)
      if (d > 0 && d < neighbordist) {
        add(sum, sum, boids[i].position) // Add location
        count++
      }
    }
    if (count > 0) {
      scale(sum, sum, 1 / count)
      return this.seek(sum) // Steer towards the location
    } else {
      return set(createVector(), 0, 0)
    }
  }
}
