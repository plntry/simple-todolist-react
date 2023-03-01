import { useContext } from 'react'
import { CreateTodoContext } from '../../CreateTodoBar'
import EmptyFieldMessage from '../../EmptyFieldMessage'
import '../inputs.css'

function DescriptionInput () {
  const context = useContext(CreateTodoContext)

  const inputStyles = context?.isDescriptionEmpty ? 'emptyInput' : ''

  return (
    <>
      <div className='col-container'>
        <label>
          Description:
        </label>
        <input
            className={`${inputStyles}`}
            type='text'
            value={context?.description}
            onChange={(e) => context?.setDescription(e.target.value)}
            placeholder='Enter description'
        />
        {context?.isDescriptionEmpty ? <EmptyFieldMessage /> : ''}
      </div>
    </>
  )
}

export default DescriptionInput
