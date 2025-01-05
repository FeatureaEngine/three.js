import { IUniform } from '../../libs/three/Three.js';

export const LuminosityShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
