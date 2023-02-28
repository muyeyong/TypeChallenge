// ============= Test Cases =============
import type { Equal, Expect, ExpectExtends } from './test-utils'

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>,
]


// ============= Your Code Here =============
/**
 * 需要把S里面的字符枚举出来
 * 是不是可以类比Chainable Options， 最开始就是一个空的，然后叠加
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * 想错了，居然还可以用模板字符串，最开始就该想到做类型判断就要用infer推断
 */
type TrimLeft<S extends string> = S extends `${infer LEFT}${infer RIGHT}` ? LEFT extends " " | "\n" | "\t" ? TrimLeft<RIGHT> : S : S
