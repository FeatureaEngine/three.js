import { IUniform } from '../../libs/three/Three.js';

export const CopyShader: {
    uniforms: {
        tDiffuse: IUniform;
        opacity: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
