import { PerspectiveCamera, Vector3 } from '../../libs/three/Three.js';

export function frameCorners(
    camera: PerspectiveCamera,
    bottomLeftCorner: Vector3,
    bottomRightCorner: Vector3,
    topLeftCorner: Vector3,
    estimateViewFrustum?: boolean,
): void;
