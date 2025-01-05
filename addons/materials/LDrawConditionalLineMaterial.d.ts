import { ShaderMaterial, ShaderMaterialParameters } from '../../libs/three/Three.js';

declare class LDrawConditionalLineMaterial extends ShaderMaterial {
    readonly isLDrawConditionalLineMaterial: true;

    constructor(parameters?: ShaderMaterialParameters);
}

export { LDrawConditionalLineMaterial };
