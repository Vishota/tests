<script lang="ts" setup>
import { InterpretationRule, Test } from '@/composables/types';
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

let test = reactive({
    title: 'Loading...',
    questions: [],
    interpretation: []
} as Test)

const [file, resultStr] = (route.params.data as string).split('-')
const result = parseInt(resultStr)
const interpretation = ref('loading...')

import('@/assets/data/tests/' + file)
    .then(v => {
        Object.assign(test, v)
        interpretation.value = interpretateResults() || ''
    })

function interpretateResults() {
    console.log(test.interpretation
        .filter(rule => rule.condition !== 'default'));
    
    const interpretation = test.interpretation
        .filter(rule => rule.condition !== 'default')
        .find((rule: any) => {
            console.log(rule.condition.from);
            
            return (rule.condition.from === undefined || result >= rule.condition.from) && (rule.condition.to === undefined || result < rule.condition.to)
        })
        ?.text
        ||
        test.interpretation
        .find(rule => rule.condition === 'default')
        ?.text || 'Cannot parse result'
    
    console.log(result)
    
    return interpretation
}
</script>
<template>
    <div class="result-header">Результаты теста</div>
    <div class="result-card">
        <div class="test-header">{{ test.title }}</div>
        <div class="test-results">
            <div class="test-result">
                <div class="result-aspect">Результат: </div>
                <div class="result">{{ interpretation }}</div>
            </div>
        </div>
    </div>
    <button class="main-menu-button" @click="$router.push('/')">Главное меню</button>
</template>
