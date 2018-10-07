import { vec2, normalize, scale } from 'gl-vec2'

export function map(value: number, istart: number, istop: number, ostart: number, ostop: number) {
  return ostart + (ostop - ostart) * ((value - istart) / (istop - istart))
}

export function setLen(out: vec2, a: vec2, x: number) {
  normalize(out, a)
  scale(out, out, x)
  return out
}

export function heading(a: vec2) {
  return Math.atan2(a[1], a[0])
}
