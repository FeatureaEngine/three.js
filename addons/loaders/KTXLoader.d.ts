import {
    CompressedPixelFormat,
    CompressedTextureLoader,
    CompressedTextureMipmap,
    LoadingManager,
    PixelFormat,
} from '../../libs/three/Three.js';

export interface KTX {
    mipmaps: CompressedTextureMipmap[];
    width: number;
    height: number;
    format: PixelFormat | CompressedPixelFormat;
    mipmapCount: number;
    isCubemap: boolean;
}

export class KTXLoader extends CompressedTextureLoader {
    constructor(manager?: LoadingManager);

    parse(buffer: ArrayBuffer, loadMipmaps: boolean): KTX;
}
