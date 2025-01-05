import {
    CompressedPixelFormat,
    CompressedTextureLoader,
    CompressedTextureMipmap,
    LoadingManager,
    PixelFormat,
} from '../../libs/three/Three.js';

export interface DDS {
    mipmaps: CompressedTextureMipmap[];
    width: number;
    height: number;
    format: PixelFormat | CompressedPixelFormat;
    mipmapCount: number;
    isCubemap: boolean;
}

export class DDSLoader extends CompressedTextureLoader {
    constructor(manager?: LoadingManager);

    parse(buffer: ArrayBuffer, loadMipmaps: boolean): DDS;
}
