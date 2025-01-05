import { IUniform } from '../../libs/three/Three.js';

export const NormalMapShader: {
    name: string;
    uniforms: {
        heightMap: IUniform;
        resolution: IUniform;
        scale: IUniform;
        height: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
