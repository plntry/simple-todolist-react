import { useContext } from 'react'
import { useAppDispatch } from '../../store'
import { addNewTodo } from '../../store/todosSlice'
import { CreateTodoContext } from '../CreateTodoBar'
import './CreateBtn.css'

function CreateBtn () {
  const dispatch = useAppDispatch()

  const context = useContext(CreateTodoContext)

  const title = context?.title
  const description = context?.description

  const setIsTitleEmpty = context?.setIsTitleEmpty
  const setIsDescriptionEmpty = context?.setIsDescriptionEmpty

  const handleCreate = () => {
    if (title?.length === 0 || description?.length === 0) {
      if (title?.length === 0) {
        setIsTitleEmpty(true)
      } else {
        setIsTitleEmpty(false)
      }

      if (description?.length === 0) {
        setIsDescriptionEmpty(true)
      } else {
        setIsDescriptionEmpty(false)
      }
    } else {
      setIsTitleEmpty(false)
      setIsDescriptionEmpty(false)

      dispatch(addNewTodo({ title, description }))
    }
  }

  return (
      <>
        <button
          onClick={handleCreate}
        >
          Create
        </button>
      </>
  )
}

export default CreateBtn
