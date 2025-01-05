import { Loader, LoadingManager } from '../../libs/three/Three.js';
import { FontData } from "./FontLoader.js";

export class TTFLoader extends Loader<FontData> {
    reversed: boolean;

    constructor(manager?: LoadingManager);

    parse(arraybuffer: ArrayBuffer): FontData;
}
