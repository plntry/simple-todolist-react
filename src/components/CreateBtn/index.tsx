import { useContext, useEffect } from 'react'
import { useAppDispatch } from '../../store'
import { addNewTodo } from '../../store/todosSlice'
import { CreateTodoContext } from '../CreateTodoBar'

function CreateBtn () {
  const dispatch = useAppDispatch()

  const context = useContext(CreateTodoContext)

  const title = context?.title
  const description = context?.description

  useEffect(() => {
    console.log(title, 'tit2')
    console.log(description, 'descript2')
  }, [context?.description, context?.title])

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
