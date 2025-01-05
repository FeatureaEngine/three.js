import { BufferGeometry, Loader, LoadingManager } from '../../libs/three/Three.js';

export class XYZLoader extends Loader<BufferGeometry> {
    constructor(manager?: LoadingManager);

    parse(data: string, onLoad: (geometry: BufferGeometry) => void): object;
}
