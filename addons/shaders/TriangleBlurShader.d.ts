import { IUniform } from '../../libs/three/Three.js';

export const TriangleBlurShader: {
    name: string;
    uniforms: {
        texture: IUniform;
        delta: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
