import { useContext } from 'react'
import { useAppDispatch } from '../../store'
import { addNewTodo } from '../../store/todosSlice'
import { CreateTodoContext } from '../CreateTodoBar'

function CreateBtn () {
  const dispatch = useAppDispatch()

  const context = useContext(CreateTodoContext)

  const title = context?.title
  const description = context?.description

  return (
      <>
        <button
            onClick={() => dispatch(addNewTodo({ title, description }))}
        >
            Create
        </button>
      </>
  )
}

export default CreateBtn
