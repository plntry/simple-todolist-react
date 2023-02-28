interface ITodo {
  id: number
  title: string
  description: string
  status: boolean
}

interface ITodos {
  todos: IProduct[] | undefined
}

interface ICreateNewTodoContext {
  title: string
  setTitle: Dispatch<SetStateAction<string>>
  description: string
  setDescription: Dispatch<SetStateAction<string>>
}
