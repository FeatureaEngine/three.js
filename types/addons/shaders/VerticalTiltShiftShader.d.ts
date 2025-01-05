import { IUniform } from '../../libs/three/Three.js';

export const VerticalTiltShiftShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        v: IUniform;
        r: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
