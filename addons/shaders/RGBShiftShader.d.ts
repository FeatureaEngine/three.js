import { IUniform } from '../../libs/three/Three.js';

export const RGBShiftShader: {
    uniforms: {
        tDiffuse: IUniform;
        amount: IUniform;
        angle: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
