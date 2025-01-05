import { IUniform } from '../../libs/three/Three.js';

export const SepiaShader: {
    uniforms: {
        tDiffuse: IUniform;
        amount: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
