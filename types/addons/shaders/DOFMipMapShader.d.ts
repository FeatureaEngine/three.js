import { IUniform } from '../../libs/three/Three.js';

export const DOFMipMapShader: {
    name: string;
    uniforms: {
        tColor: IUniform;
        tDepth: IUniform;
        focus: IUniform;
        maxblur: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
