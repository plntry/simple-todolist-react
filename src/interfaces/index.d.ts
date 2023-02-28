interface ITodo {
  id: number
  title: string
  description: string
  status: boolean
}

interface ITodos {
  todos: IProduct[] | undefined
}
