import { Boid } from './Boid'
import { vec2 } from 'gl-vec2'

export class Flock {
  boids: Array<Boid>

  constructor() {
    this.boids = [] // Initialize the array
  }

  run(target: vec2 = null) {
    for (let boid of this.boids) {
      boid.run(this.boids, target) // Passing the entire list of boids to each boid individually
    }
  }

  addBoid(b: Boid) {
    this.boids.push(b)
  }
}
