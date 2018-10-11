import { vec2 } from 'gl-vec2';
export declare type BoidOptions = {
    center: vec2;
    canvasSize: vec2;
    velocity?: vec2;
    r?: number;
    maxspeed?: number;
    maxforce?: number;
    separationScale?: number;
    alignScale?: number;
    cohesionScale?: number;
    desiredSeparation?: number;
    neighborDistance?: number;
    arriveRadius?: number;
};
export declare class Boid {
    acceleration: vec2;
    velocity: vec2;
    position: vec2;
    r: number;
    maxspeed: number;
    maxforce: number;
    width: number;
    height: number;
    separationScale: number;
    alignScale: number;
    cohesionScale: number;
    desiredSeparation: number;
    neighborDistance: number;
    arriveRadius: number;
    desiredSeek: vec2;
    steerSeek: vec2;
    separateDiff: vec2;
    steerSeparate: vec2;
    sumCohesion: vec2;
    sumAlign: vec2;
    oldVelocity: vec2;
    smoothVelocity: vec2;
    constructor(opts: BoidOptions);
    run(boids: ReadonlyArray<Boid>, target?: vec2): void;
    arrive(target: vec2): void;
    flock(boids: ReadonlyArray<Boid>): void;
    update(): void;
    seek(target: vec2): vec2;
    borders(): void;
    separate(boids: ReadonlyArray<Boid>): vec2;
    align(boids: ReadonlyArray<Boid>): vec2;
    cohesion(boids: ReadonlyArray<Boid>): vec2;
}