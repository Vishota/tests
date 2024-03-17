<script setup lang="ts">
import TestsGroup from './TestsGroup.vue';
import groups from '@/assets/data/groups.json'
</script>
<template>
    <div class="test-themes">
        <TestsGroup v-for="group in groups" :group="group" />
    </div>
</template>