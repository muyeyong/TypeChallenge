// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]


// ============= Your Code Here =============
/**
 *  分配律
 * type P<T> = T extends 'x' ? string : number;
 * type A3 = P<'x' | 'y'>  // A3的类型是 string | number
 * 
 * 防止分配律
 *  type P<T> = [T] extends ['x'] ? string : number;
  type A1 = P<'x' | 'y'> // number
  type A2 = P<never> // string
 */
type MyExclude<T, U> = T extends U ? never : T
