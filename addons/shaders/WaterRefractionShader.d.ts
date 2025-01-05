import { IUniform } from '../../libs/three/Three.js';

export const WaterRefractionShader: {
    name: string;
    uniforms: {
        color: IUniform;
        time: IUniform;
        tDiffuse: IUniform;
        tDudv: IUniform;
        textureMatrix: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
