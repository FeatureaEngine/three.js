import { IUniform } from '../../libs/three/Three.js';

export const FocusShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        screenWidth: IUniform;
        screenHeight: IUniform;
        sampleDistance: IUniform;
        waveFactor: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
