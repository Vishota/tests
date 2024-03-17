export type TestsInput = TestsGroup[]

export type TestsGroup = {
    title: string,
    tests: {
        previewTitle: string,
        file: string
    }[]
}

export type Test = {
    title: string,
    questions: Question[],
    interpretation: InterpretationRule[]
}

export type Question = {
    text: string,
    options: Option[]
}

export type Option = {
    text: string,
    value: number
}

export type InterpretationRule = {
    condition: 'default' | {
        from?: number,  // inclusive
        to?: number     // non-inclusive
    },
    text: string
} 