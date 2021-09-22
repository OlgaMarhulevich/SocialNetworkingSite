export  const required = (value: string) => value ? undefined : 'Field is required!'

export const maxLengthCreator = (max: number) => (value: string) =>
    value && value.length > max ? `Must be ${max} characters or less!` : undefined

export const minLengthCreator = (min: number) => (value: string) =>
    value && value.length < min ? `Must be at least ${min} characters!` : undefined