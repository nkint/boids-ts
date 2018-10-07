import { Flock } from './Flock'
import { Boid } from './Boid'

const flock = new Flock()

export function init(context: CanvasRenderingContext2D, width: number, height: number) {
  // Add an initial set of boids into the system
  for (let i = 0; i < 60; i++) {
    let b = new Boid(width / 2, height / 2, width, height)
    flock.addBoid(b)
  }

  const gradient = context.createLinearGradient(0, 0, width, 0)
  gradient.addColorStop(0, '#00b4db')
  gradient.addColorStop(1, '#0083b0')

  function loop() {
    flock.run()
    requestAnimationFrame(loop)

    context.clearRect(0, 0, width, height)
    context.fillStyle = gradient
    context.fillRect(0, 0, width, height)

    context.fillStyle = 'black'

    for (let i = 0; i < flock.boids.length; ++i) {
      const boid = flock.boids[i]

      context.beginPath()
      context.moveTo(boid.position[0], boid.position[1])
      context.arc(boid.position[0], boid.position[1], 2, 0, Math.PI * 2)
      context.closePath()
      context.fill()
    }
  }

  requestAnimationFrame(loop)
}
