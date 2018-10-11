export function drawBoid(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  theta: number,
  r: number,
) {
  context.save()
  context.translate(x, y)
  context.rotate(theta)
  context.beginPath()
  context.moveTo(0, -r * 2)
  context.lineTo(-r, r * 2)
  context.lineTo(r, r * 2)
  context.closePath()
  context.stroke()
  context.restore()
}
