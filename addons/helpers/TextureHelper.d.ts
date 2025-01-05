import { Mesh, Texture } from '../../libs/three/Three.js';

export class TextureHelper extends Mesh {
    texture: Texture;
    type: "TextureHelper";

    constructor(texture: Texture, width?: number, height?: number, depth?: number);

    dispose(): void;
}
