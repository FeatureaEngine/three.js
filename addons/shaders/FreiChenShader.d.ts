import { IUniform } from '../../libs/three/Three.js';

export const FreiChenShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        aspect: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
