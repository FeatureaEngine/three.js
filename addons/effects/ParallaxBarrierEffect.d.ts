import { Camera, Scene, WebGLRenderer } from '../../libs/three/Three.js';

declare class ParallaxBarrierEffect {
    setSize: (width: number, height: number) => void;
    render: (scene: Scene, camera: Camera) => void;
    dispose: () => void;

    constructor(renderer: WebGLRenderer);
}

export { ParallaxBarrierEffect };
