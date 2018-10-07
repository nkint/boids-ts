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
  len,
} from 'gl-vec2'
import { setLen, map } from './gl-vec2-utils'

export type BoidOptions = {
  center: vec2
  canvasSize: vec2
  velocity?: vec2
  r?: number
  maxspeed?: number
  maxforce?: number
  separationScale?: number
  alignScale?: number
  cohesionScale?: number
  desiredSeparation?: number
  neighborDistance?: number
  arriveRadius?: number
}

export class Boid {
  acceleration: vec2
  velocity: vec2
  position: vec2
  r: number
  maxspeed: number
  maxforce: number
  width: number
  height: number

  separationScale: number
  alignScale: number
  cohesionScale: number
  desiredSeparation: number
  neighborDistance: number
  arriveRadius: number

  constructor(opts: BoidOptions) {
    this.acceleration = set(createVector(), 0, 0)
    this.velocity = set(createVector(), opts.velocity[0], opts.velocity[1])
    this.position = set(createVector(), opts.center[0], opts.center[1])
    this.r = opts.r || 3
    this.maxspeed = opts.maxspeed || 3 // Maximum speed
    this.maxforce = opts.maxforce || 0.05 // Maximum steering force
    this.width = opts.canvasSize[0]
    this.height = opts.canvasSize[1]

    this.separationScale = opts.separationScale || 1.5
    this.alignScale = opts.alignScale || 1.0
    this.cohesionScale = opts.cohesionScale || 1.0

    this.desiredSeparation = opts.desiredSeparation || 25
    this.neighborDistance = opts.neighborDistance || 50

    this.arriveRadius = opts.arriveRadius || 100
  }

  run(boids: ReadonlyArray<Boid>, target: vec2 = null) {
    if (target) {
      this.arrive(target)
    } else {
      this.flock(boids)
    }

    this.update()
    this.borders()
  }

  arrive(target: vec2) {
    var desired = sub(createVector(), target, this.position) // A vector pointing from the location to the target
    var d = len(desired)
    // Scale with arbitrary damping within arriveRadius pixels
    if (d < this.arriveRadius) {
      var m = map(d, 0, this.arriveRadius, 0, this.maxspeed)
      setLen(desired, desired, m)
    } else {
      setLen(desired, desired, this.maxspeed)
    }

    // Steering = Desired minus Velocity
    var steer = sub(desired, desired, this.velocity)
    limit(steer, steer, this.maxforce) // Limit to maximum steering force
    this.applyForce(steer)
  }

  applyForce(force: vec2) {
    // We could add mass here if we want A = F / M
    // this.acceleration.add(force)
    add(this.acceleration, this.acceleration, force)
  }

  // We accumulate a new acceleration each time based on three rules
  flock(boids: ReadonlyArray<Boid>) {
    let sep = this.separate(boids) // Separation
    let ali = this.align(boids) // Alignment
    let coh = this.cohesion(boids) // Cohesion
    // Arbitrarily weight these forces
    scale(sep, sep, this.separationScale)
    scale(ali, ali, this.alignScale)
    scale(coh, coh, this.cohesionScale)
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

  // Wraparound
  borders() {
    if (this.position[0] < -this.r) this.position[0] = this.width + this.r
    if (this.position[1] < -this.r) this.position[1] = this.height + this.r
    if (this.position[0] > this.width + this.r) this.position[0] = -this.r
    if (this.position[1] > this.height + this.r) this.position[1] = -this.r
  }

  // Separation
  // Method checks for nearby boids and steers away
  separate(boids: ReadonlyArray<Boid>) {
    let desiredseparation = this.desiredSeparation
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
  align(boids: ReadonlyArray<Boid>) {
    let neighborDistance = this.neighborDistance
    let sum = set(createVector(), 0, 0)
    let count = 0
    for (let i = 0; i < boids.length; i++) {
      let d = dist(this.position, boids[i].position)
      if (d > 0 && d < neighborDistance) {
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
  cohesion(boids: ReadonlyArray<Boid>) {
    let neighborDistance = this.neighborDistance
    let sum = set(createVector(), 0, 0) // Start with empty vector to accumulate all locations
    let count = 0
    for (let i = 0; i < boids.length; i++) {
      let d = dist(this.position, boids[i].position)
      if (d > 0 && d < neighborDistance) {
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
