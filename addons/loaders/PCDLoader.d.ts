import { BufferGeometry, Loader, LoadingManager, Points, PointsMaterial } from '../../libs/three/Three.js';

export class PCDLoader extends Loader<Points<BufferGeometry, PointsMaterial>> {
    constructor(manager?: LoadingManager);
    littleEndian: boolean;

    parse(data: ArrayBuffer | string): Points<BufferGeometry, PointsMaterial>;
}
