export type Lang = 'el' | 'en'

type DeepString<T> = { [K in keyof T]: T[K] extends string ? string : DeepString<T[K]> }
export type Translations = DeepString<typeof import('./el').el>
