// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
]


// ============= Your Code Here =============

/**
 * type Push<T extends any[], U> = U extends Array<any> ? [...T, ...U] : [...T, U]
 * Push<['1', 2, '3'], boolean> ==> 如果按照上面的写法会解析为 ['1', 2, '3', true] | ['1', 2, '3', false]
 */
type Push<T extends any[], U> = [...T, U]
// type Push<T extends any[], U> = U extends any[]? [...T, ...U] : [...T, U]

