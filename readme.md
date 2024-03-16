Root folder is app/public

## Types

### Expected JSON format

```ts

type TestsInput = TestsGroup[]

type TestsGroup = {
    title: string,
    tests: {
        previewTitle: string,
        file: string
    }[]
}

type Test = {
    title: string,
    questions: Question[],
    interpretation: InterpretationRule[]
}

type Question = {
    text: string,
    options: Option[]
}

type Option = {
    text: string,
    value: number
}

type InterpretationRule = {
    condition: 'default' | {
        from?: number,  // inclusive
        to?: number     // non-inclusive
    },
    text: string
} 
```

## Examples

### ./tests/groups.json

```json
[
    {
        "title": "Тесты на тип никиты",
        "tests": [
            { "previewTitle": "Тест на никиту врацкого", "file": "lie.json" },
            { "previewTitle": "Тест на никиту жука", "file": "bug.json" }
        ]
    }
]
```

### ./tests/lie.json
```json
{
    "title": "Являетесь ли вы Никитой Врацким?",
    "questions": [
        {
            "text": "Вы Никита?",
            "options": [
                { "text": "Да", "value": 1 },
                { "text": "Нет", "value": 0 },
                { "text": "Не уверен", "value": 1 }
            ]
        },
        {
            "text": "Вы Врацкий?",
            "options": [
                { "text": "Да", "value": 1 },
                { "text": "Нет", "value": 0 },
                { "text": "Не уверен", "value": 1 }
            ]
        }
    ],
    "interpretation": [
        { "condition": "default", "text": "Поздравляем! Ваш результат - не Никита Врацкий" },
        { "condition": { "from": 2 }, "text": "Вы - Никита Врацкий" }
    ]
}
```

### ./tests/bug.json
```json
{
    "title": "Являетесь ли вы Никитой Жуком?",
    "questions": [
        {
            "text": "Вы Никита?",
            "options": [
                { "text": "Да", "value": 1 },
                { "text": "Нет", "value": 0 }
            ]
        },
        {
            "text": "Вы Жук?",
            "options": [
                { "text": "Да, моя фамилия Жук", "value": 4 },
                { "text": "Да, я жук, или жесткокрылый (лат. Coleoptera)", "value": 2 },
                { "text": "Нет", "value": 0 }
            ]
        }
    ],
    "interpretation": [
        { "condition": "default", "text": "Вы не никита жук" },
        { "condition": { "from": 1, "to": 2 }, "text": "Вы - Никита Жук на 50% (просто Никита)" },
        { "condition": { "from": 2, "to": 3 }, "text": "жжжжжжжжжжж" },
        { "condition": { "from": 3, "to": 4 }, "text": "Вы - жук по имени Никита" },
        { "condition": { "from": 4, "to": 5 }, "text": "Вы - Никита Жук на 50% (просто Жук)" },
        { "condition": { "from": 5 }, "text": "Вы - Никита Жук" }
    ]
}
```