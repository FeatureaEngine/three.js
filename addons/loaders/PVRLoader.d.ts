import { CompressedPixelFormat, CompressedTextureLoader, CompressedTextureMipmap, LoadingManager } from '../../libs/three/Three.js';

export interface PVR {
    mipmaps: CompressedTextureMipmap[];
    width: number;
    height: number;
    format: CompressedPixelFormat;
    mipmapCount: number;
    isCubemap: boolean;
}

export class PVRLoader extends CompressedTextureLoader {
    constructor(manager?: LoadingManager);

    parse(buffer: ArrayBuffer, loadMipmaps: boolean): PVR;
}
