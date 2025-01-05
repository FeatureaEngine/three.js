import { IUniform, ShaderMaterial, Texture } from '../../libs/three/Three.js';
import { FullScreenQuad, Pass } from "./Pass.js";

export class TexturePass extends Pass {
    constructor(map?: Texture, opacity?: number);
    map: Texture | undefined;
    opacity: number;
    uniforms: Record<string, IUniform>;
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
}
