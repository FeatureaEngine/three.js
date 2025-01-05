import { Mesh, MeshBasicMaterial, PlaneGeometry } from '../../libs/three/Three.js';

export class HTMLMesh extends Mesh<PlaneGeometry, MeshBasicMaterial> {
    constructor(dom: HTMLElement);
    dispose(): void;
}
