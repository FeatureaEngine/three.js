import LightingNode from './LightingNode.js';

/**
 * A generic class that can be used by nodes which contribute
 * ambient occlusion to the scene. E.g. an ambient occlusion map
 * node can be used as input for this module. Used in {@link NodeMaterial}.
 *
 * @augments LightingNode
 */
class AONode extends LightingNode {

    /**
     * Constructs a new AO node.
     *
     * @param {Node<float>?} [aoNode=null] - The ambient occlusion node.
     */
    constructor(aoNode = null) {
        super();
        /**
         * The ambient occlusion node.
         *
         * @type {Node<float>?}
         * @default null
         */
        this.aoNode = aoNode;
    }

    static get type() {
        return 'AONode';
    }

    setup(builder) {
        builder.context.ambientOcclusion.mulAssign(this.aoNode);
    }

}

export default AONode;
