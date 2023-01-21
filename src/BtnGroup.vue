<script lang="ts">
import { Sizeable } from '@vue-interface/sizeable';
import { defineComponent } from 'vue';

export default defineComponent({

    name: 'BtnGroup',

    mixins: [
        Sizeable
    ],

    props: {

        /**
         * The size prefix.
         *
         * @param {String}
         */
        sizePrefix: {
            type: String,
            default() {
                return 'btn-group';
            }
        },

        /**
         * Denote the button group as toggle buttons
         *
         * @type {Boolean}
         */
        toggle: Boolean,

        /**
         * Display the buttons vertically
         *
         * @type {Boolean}
         */
        vertical: Boolean

    },

    computed: {

        classes() {
            return {
                'btn-group': !this.vertical,
                'btn-group-toggle': this.toggle,
                'btn-group-vertical': this.vertical,
                [this.sizeableClass]: !!this.size,
            };
        }

    }

});
</script>

<template>
    <div
        :class="classes"
        :data-toggle="toggle ? 'buttons' : false"
        role="group">
        <slot />
    </div>
</template>
