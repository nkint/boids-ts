import { Flock } from './Flock'
import { Boid, BoidOptions } from './Boid'
import { RandomSeed, create as createRandom } from 'random-seed'
import { create as createVector, set, vec2 } from 'gl-vec2'
import { heading } from './gl-vec2-utils'
import { drawBoid } from './draw-utils'

const randomGenerator: RandomSeed = createRandom('dudee')
const random = randomGenerator.floatBetween

const CANVAS_WITH_1 = false
const SAVE_EVERTYTHING = false

function getBoidOpts(canvasWidth: number, canvasHeight: number): BoidOptions {
  const normalizationContant = CANVAS_WITH_1 ? 600 : 1
  return {
    center: [canvasWidth / 2, canvasHeight / 2],
    canvasSize: [canvasWidth, canvasHeight],

    velocity: set(
      createVector(),
      random(-1, 1) / normalizationContant,
      random(-1, 1) / normalizationContant,
    ),
    r: 3 / normalizationContant,
    maxspeed: 3 / normalizationContant,
    maxforce: 0.05 / normalizationContant,

    separationScale: 1.5,
    alignScale: 1.0,
    cohesionScale: 1.0,

    desiredSeparation: 25 / normalizationContant,
    neighborDistance: 50 / normalizationContant,
  }
}

export function createScene(context: CanvasRenderingContext2D, width: number, height: number) {
  const flock = new Flock()
  let frameCount = 0
  let target: vec2 = null

  for (let i = 0; i < 60; i++) {
    let b = new Boid(getBoidOpts(CANVAS_WITH_1 ? 1 : width, CANVAS_WITH_1 ? 1 : height))
    flock.addBoid(b)
  }

  const gradient = context.createLinearGradient(0, 0, width, 0)
  gradient.addColorStop(0, '#00b4db')
  gradient.addColorStop(1, '#0083b0')

  const onMouseDown = (ev: MouseEvent) => {
    target = [300, 300]
  }

  document.addEventListener('mousedown', onMouseDown)
  if ((module as any).hot) {
    ;(module as any).hot.dispose(() => document.removeEventListener('mousedown', onMouseDown))
  }

  function loop() {
    frameCount++
    flock.run(target)

    context.clearRect(0, 0, width, height)
    context.fillStyle = gradient
    context.fillRect(0, 0, width, height)

    context.fillStyle = 'black'
    context.strokeStyle = 'black'

    for (let i = 0; i < flock.boids.length; ++i) {
      const boid = flock.boids[i]
      const x = boid.position[0] * (CANVAS_WITH_1 ? width : 1)
      const y = boid.position[1] * (CANVAS_WITH_1 ? height : 1)
      const theta = heading(boid.velocity) + Math.PI / 2
      drawBoid(context, x, y, theta, boid.r)
    }

    if (target) {
      context.strokeRect(target[0] - 50, target[1] - 50, 100, 100)
    }

    if (!SAVE_EVERTYTHING) {
      requestAnimationFrame(loop)
    } else {
      const data = {
        boids: flock.boids.map(boid => ({
          position: [boid.position[0], boid.position[1]],
          rotation: heading(boid.velocity) + Math.PI / 2,
        })),
      }
      postData(`http://localhost:8080/save/${frameCount}`, data).then(() => loop())
    }
  }

  requestAnimationFrame(loop)
}

function postData(url = ``, payload = {}) {
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(payload),
  })
}
