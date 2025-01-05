import { MeshPhysicalMaterial, MeshPhysicalMaterialParameters, Texture } from '../../libs/three/Three.js';

export interface MeshPostProcessingMaterialParameters extends MeshPhysicalMaterialParameters {
    aoPassMap?: Texture | null | undefined;
    aoPassMapScale?: number | undefined;
}

export class MeshPostProcessingMaterial extends MeshPhysicalMaterial {
    constructor(parameters: MeshPostProcessingMaterialParameters);

    get aoPassMap(): Texture | null | undefined;
    set aoPassMap(aoPassMap: Texture | null | undefined);
}
