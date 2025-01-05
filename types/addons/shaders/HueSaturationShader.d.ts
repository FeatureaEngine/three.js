import { IUniform } from '../../libs/three/Three.js';

export const HueSaturationShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        hue: IUniform;
        saturation: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
