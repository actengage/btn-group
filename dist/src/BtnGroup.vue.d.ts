export type BtnGroupProps = {
    size?: string;
    toggle?: boolean;
    vertical?: boolean;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    size: {
        type: import("vue").PropType<string>;
    };
    toggle: {
        type: import("vue").PropType<boolean>;
    };
    vertical: {
        type: import("vue").PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: import("vue").PropType<string>;
    };
    toggle: {
        type: import("vue").PropType<boolean>;
    };
    vertical: {
        type: import("vue").PropType<boolean>;
    };
}>>, {}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
