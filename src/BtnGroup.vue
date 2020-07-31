<template>
    <div :class="classes" :data-toggle="toggle ? 'buttons' : false" role="group">
        <template v-if="buttons">
            <btn v-for="(button, i) in buttons" :key="i" v-bind="button" />
        </template>
        <slot />
    </div>
</template>

<script>
import Btn from '@vue-interface/btn';
import Sizeable from '@vue-interface/sizeable';
import MergeClasses from '@vue-interface/merge-classes';

export default {

    name: 'BtnGroup',

    components: {
        Btn
    },

    mixins: [
        Sizeable,
        MergeClasses
    ],

    props: {

        /**
         * An array of buttons
         *
         * @type {Array}
         */
        buttons: Array,

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
                'btn-group-vertical': this.vertical
            };
        }

    }

};
</script>
