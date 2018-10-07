import { Boid } from './Boid'

export class Flock {
  boids: Array<Boid>

  constructor() {
    this.boids = [] // Initialize the array
  }

  run() {
    for (let boid of this.boids) {
      boid.run(this.boids) // Passing the entire list of boids to each boid individually
    }
  }

  addBoid(b: Boid) {
    this.boids.push(b)
  }
}
