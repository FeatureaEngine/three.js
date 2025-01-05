import { IUniform } from '../../libs/three/Three.js';

export const SobelOperatorShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        resolution: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
