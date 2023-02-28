import { useContext } from 'react'
import { CreateTodoContext } from '../CreateTodoBar'

function TitleInput () {
  const context = useContext(CreateTodoContext)

  return (
    <>
      <label>
        Title:
        <input
            type='text'
            value={context?.title}
            onChange={(e) => context?.setTitle(e.target.value)}
            placeholder='Enter title'
        />
      </label>
    </>
  )
}

export default TitleInput
