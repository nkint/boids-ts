import { Boid } from './Boid';
import { vec2 } from 'gl-vec2';
export declare class Flock {
    boids: Array<Boid>;
    constructor();
    run(target?: vec2): void;
    addBoid(b: Boid): void;
}
