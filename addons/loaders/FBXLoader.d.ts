import { Group, Loader, LoadingManager } from '../../libs/three/Three.js';

export class FBXLoader extends Loader<Group> {
    constructor(manager?: LoadingManager);

    parse(FBXBuffer: ArrayBuffer | string, path: string): Group;
}
