interface ITodo {
  id: number
  title: string
  description: string
  status: boolean
}

interface ITodos {
  todos: IProduct[] | undefined
}

interface IStatusCheckbox {
  status: boolean
}

interface ICreateNewTodoContext {
  title: string
  setTitle: Dispatch<SetStateAction<string>>
  description: string
  setDescription: Dispatch<SetStateAction<string>>
}
