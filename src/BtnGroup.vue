<script setup lang="ts">
import { computed } from 'vue';

export type BtnGroupProps = {
    size?: string,
    toggle?: boolean,
    vertical?: boolean
};

const props = defineProps<BtnGroupProps>();

const classes = computed(() => ({
    'btn-group': true,
    'btn-group-toggle': props.toggle,
    'btn-group-vertical': props.vertical,
    [String(props.size)]: !!props.size,
}));
</script>

<template>
    <div
        :class="classes"
        :data-toggle="toggle ? 'buttons' : false"
        role="group">
        <slot />
    </div>
</template>
