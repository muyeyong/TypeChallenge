// ============= Test Cases =============
import type { Alike, Expect } from './test-utils'

declare const a: Chainable

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

const result2 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 'last name')
  .get()

const result3 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 123)
  .get()

type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>,
  Expect<Alike<typeof result3, Expected3>>,
]

type Expected1 = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

type Expected2 = {
  name: string
}

type Expected3 = {
  name: number
}


// ============= Your Code Here =============
/**
 * option是去构造一个{ key: value}类型，可以借助Record实现
 * option可连接option的话，返回的必须是一个Chainable类型
 * T会不断的去叠加
 * get怎么去获取之前的值
 *  直接返回T就好
 */
// TODO 不知道为什么要去除
type Chainable<T = {}> = {
  option: <K extends string, V>(key: K extends keyof T ? never : K , value: V
  ) => Chainable<Omit<T, K> & Record<K, V>>,
  get: () => T
}
// type Chainable = {
//   option(key: string, value: any): Chainable // { key: typeof value extends Record<string, any> ? Chainable : Chainable } 
//   get(): any
// }
