import { IUniform } from '../../libs/three/Three.js';

export const HorizontalBlurShader: {
    uniforms: {
        tDiffuse: IUniform;
        h: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
