// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}


// ============= Your Code Here =============
/***
 * [
  (P in keyof T) as
  (P extends K ? never : P)
]
复制代码
以 as 为分界，把这段代码分为 2 段

P in keyof T 是遍历的意思，这个好理解
as 在这里姑且认定为是 断言
P extends K ? never : P 这里是为了判断类型

连起来怎么看

P 在 T 的范围循环
P 得到的是 T 中的键
对于这个 P 我们为他断言 为 P / never
如果 P 的这个键在 K 的范围中，我们就断言当前的 P 是 never（抛弃原先 P 的值），那么在对象循环的时候 never 就会被忽略掉，从而实现 Omit
 */
type MyOmit<T, K> = { [ KEY in keyof T as KEY extends K ? never : KEY ] : T[KEY] }