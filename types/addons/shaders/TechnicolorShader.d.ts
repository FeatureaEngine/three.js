import { IUniform } from '../../libs/three/Three.js';

export const TechnicolorShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
