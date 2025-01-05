import { IUniform } from '../../libs/three/Three.js';

export const FilmShader: {
    uniforms: {
        tDiffuse: IUniform;
        time: IUniform;
        intensity: IUniform;
        grayscale: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
