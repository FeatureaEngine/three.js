import { IUniform } from '../../libs/three/Three.js';

export const BrightnessContrastShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        brightness: IUniform;
        contrast: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
