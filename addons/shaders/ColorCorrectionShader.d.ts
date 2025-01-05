import { IUniform } from '../../libs/three/Three.js';

export const ColorCorrectionShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        powRGB: IUniform;
        mulRGB: IUniform;
        addRGB: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
