<script lang="ts" setup>
    import { TestsGroup } from '@/composables/types';

    defineProps<{group: TestsGroup}>()
</script>
<template>
    <div class="test-theme-item">
        <div class="test-theme-header">{{ $props.group.title }}</div>
        <div class="themed-tests">
            <RouterLink v-for="test in $props.group.tests" :to="'/tests/'+test.file" class="test">
                {{ test.previewTitle }}
            </RouterLink>
        </div>
    </div>
</template>