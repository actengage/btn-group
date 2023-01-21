declare const _sfc_main: import("vue").DefineComponent<{
    /**
     * The size prefix.
     *
     * @param {String}
     */
    sizePrefix: {
        type: StringConstructor;
        default(): string;
    };
    /**
     * Denote the button group as toggle buttons
     *
     * @type {Boolean}
     */
    toggle: BooleanConstructor;
    /**
     * Display the buttons vertically
     *
     * @type {Boolean}
     */
    vertical: BooleanConstructor;
}, unknown, unknown, {
    classes(): {
        [x: number]: boolean;
        'btn-group': boolean;
        'btn-group-toggle': any;
        'btn-group-vertical': any;
    };
}, {}, import("vue").DefineComponent<{
    componentPrefix: StringConstructor;
    size: StringConstructor;
    sizePrefix: StringConstructor;
}, unknown, unknown, {
    sizeableClassPrefix(): string | undefined;
    hasSizeablePrefix(): boolean;
    sizeableClass(): string;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    componentPrefix: StringConstructor;
    size: StringConstructor;
    sizePrefix: StringConstructor;
}>>, {}>, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * The size prefix.
     *
     * @param {String}
     */
    sizePrefix: {
        type: StringConstructor;
        default(): string;
    };
    /**
     * Denote the button group as toggle buttons
     *
     * @type {Boolean}
     */
    toggle: BooleanConstructor;
    /**
     * Display the buttons vertically
     *
     * @type {Boolean}
     */
    vertical: BooleanConstructor;
}>>, {
    sizePrefix: string;
    toggle: boolean;
    vertical: boolean;
}>;
export default _sfc_main;
