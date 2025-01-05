import { Group, Loader, LoadingManager } from '../../libs/three/Three.js';

export class AMFLoader extends Loader<Group> {
    constructor(manager?: LoadingManager);

    parse(data: ArrayBuffer): Group;
}
