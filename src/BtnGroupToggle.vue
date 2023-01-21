<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

    name: 'BtnGroupToggle'

});
</script>

<template>
    <div
        class="btn-group-toggle"
        data-toggle="buttons">
        <slot />
    </div>
</template>
