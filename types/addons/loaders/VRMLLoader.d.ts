import { Loader, LoadingManager, Scene } from '../../libs/three/Three.js';

export class VRMLLoader extends Loader<Scene> {
    constructor(manager?: LoadingManager);

    parse(data: string, path: string): Scene;
}
