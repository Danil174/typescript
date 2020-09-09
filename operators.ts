interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person // 'name', 'age'
let key: PersonKeys = 'name'
// key = 'job' - error

type User = {
  _id: number
  name: string
  email: string
  createAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'>
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>

const u11: UserKeysNoMeta = 'email'
