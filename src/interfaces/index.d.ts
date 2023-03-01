interface ITodo {
  id: number
  title: string
  description: string
  status: boolean
}

interface ITodos {
  todos: IProduct[] | undefined
}

interface ITodoItemComp {
  id: number
  title: string
  description: string
  status: boolean
}

interface IModalComp {
  title: string
  description: string
  isCheckedStatus: boolean
  handleOnChangeStatus: () => void
  handleModal: () => void
}

interface IStatusCheckbox {
  isCheckedStatus: boolean
  handleOnChangeStatus: () => void
}

interface ICreateNewTodoContext {
  title: string
  setTitle: Dispatch<SetStateAction<string>>
  description: string
  setDescription: Dispatch<SetStateAction<string>>
  isTitleEmpty: boolean
  setIsTitleEmpty: Dispatch<SetStateAction<string>>
  isDescriptionEmpty: boolean
  setIsDescriptionEmpty: Dispatch<SetStateAction<string>>
}
