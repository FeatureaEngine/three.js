import { IUniform } from '../../libs/three/Three.js';

export const KaleidoShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        sides: IUniform;
        angle: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
