import { IUniform } from '../../libs/three/Three.js';

export const GammaCorrectionShader: {
    uniforms: {
        tDiffuse: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
