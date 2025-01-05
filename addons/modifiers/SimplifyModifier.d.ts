import { BufferGeometry } from '../../libs/three/Three.js';

export class SimplifyModifier {
    constructor();
    modify(geometry: BufferGeometry, count: number): BufferGeometry;
}
