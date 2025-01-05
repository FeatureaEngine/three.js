import { DataTexture, DataTextureLoader, LoadingManager } from '../../libs/three/Three.js';

export class TGALoader extends DataTextureLoader {
    constructor(manager?: LoadingManager);

    parse(data: ArrayBuffer): DataTexture;
}
