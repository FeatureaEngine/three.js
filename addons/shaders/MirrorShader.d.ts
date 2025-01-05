import { IUniform } from '../../libs/three/Three.js';

export const MirrorShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        side: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
