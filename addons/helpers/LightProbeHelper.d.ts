import { LightProbe, Mesh } from '../../libs/three/Three.js';

declare class LightProbeHelper extends Mesh {
    lightProbe: LightProbe;
    size: number;

    constructor(lightProbe: LightProbe, size?: number);

    dispose(): void;
}

export { LightProbeHelper };
