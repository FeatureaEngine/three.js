import { BufferGeometry, Loader, LoadingManager } from '../../libs/three/Three.js';

export class STLLoader extends Loader<BufferGeometry> {
    constructor(manager?: LoadingManager);

    parse(data: ArrayBuffer | string): BufferGeometry;
}
