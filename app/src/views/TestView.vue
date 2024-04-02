<script lang="ts" setup>
import { Test } from '@/composables/types';
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

let test = reactive({
  title: 'Loading...',
  questions: [],
  interpretation: []
} as Test)

let answers = ref([] as any[])

import('@/assets/data/tests/' + route.params.file)
  .then(v => {
    Object.assign(test, v)
  })

function finish() {
  if (answers.value.length < test.questions.length || answers.value.length != Object.keys(answers.value).length) {
    askAnswerAll()
    return
  }

  let result = 0

  answers.value.forEach((answer, question) => {
    result += test.questions[question].options[answer].value
    if (test.questions[question].options[answer].value === undefined) console.log('bad');

  })

  router.push(`/results/${route.params.file}-${result}`)
}

function askAnswerAll() {
  alert('Пожалуйста, ответьте на все вопросы теста')
}
</script>
<template>
  <RouterLink to="/">
    <button class="commit-results-button">
      На главную
    </button>
  </RouterLink>
  <div class="test-header">{{ test.title }}</div>
  <div class="questions">
    <div class="question-card" v-for="question, questionId in test.questions">
      <div class="question-text">{{ question.text }}</div>
      <div class="choose">Выберите один ответ</div>
      <fieldset class="options">
        <div>
          <div class="option" v-for="option, optionId in question.options">
            <input type="radio" :id="`option-${questionId}-${optionId}`" :value="optionId"
              v-model="answers[questionId]" />
            <label :for="`option-${questionId}-${optionId}`">{{ option.text }}</label>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
  <button class="commit-results-button" @click="finish">
    Завершить тест
  </button>
</template>
