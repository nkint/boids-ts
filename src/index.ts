import { createFit } from 'canvas-fit-margin-ts'
import { Flock } from './Flock'
import { Boid } from './Boid'
import { init } from './scene'

const scale = window.devicePixelRatio || 1
const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')
const fit = createFit(canvas, { scale })
document.body.style.margin = '0'
document.body.appendChild(canvas)

function render(width: number, height: number) {
  init(context, width, height)
}

const onResize = () => {
  const [width, height] = fit()
  render(width * scale, height * scale)
  console.log(width, height)
}

onResize()
window.addEventListener('resize', onResize)

if ((module as any).hot) {
  ;(module as any).hot.dispose(() => canvas.remove())
}
