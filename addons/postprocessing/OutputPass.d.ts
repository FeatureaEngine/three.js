import { ShaderMaterial } from '../../libs/three/Three.js';
import { FullScreenQuad, Pass } from "./Pass.js";

export class OutputPass extends Pass {
    constructor();
    uniforms: object;
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
}
