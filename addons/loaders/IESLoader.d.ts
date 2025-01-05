import { DataTexture, Loader } from '../../libs/three/Three.js';

export class IESLoader extends Loader<DataTexture> {
    parse(text: string): DataTexture;
}
