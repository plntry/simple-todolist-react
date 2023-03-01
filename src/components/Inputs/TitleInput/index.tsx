import { useContext } from 'react'
import { CreateTodoContext } from '../../CreateTodoBar'
import EmptyFieldMessage from '../../EmptyFieldMessage'
import '../inputs.css'

function TitleInput () {
  const context = useContext(CreateTodoContext)

  const inputStyles = context?.isTitleEmpty ? 'emptyInput' : ''

  return (
    <>
      <div className='col-container'>
        <label>
          Title:
        </label>
        <input
            className={`${inputStyles}`}
            type='text'
            value={context?.title}
            onChange={(e) => context?.setTitle(e.target.value)}
            placeholder='Enter title'
        />
        {context?.isTitleEmpty ? <EmptyFieldMessage /> : ''}
      </div>
    </>
  )
}

export default TitleInput
