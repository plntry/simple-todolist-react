import { useContext, useEffect } from 'react'
import { CreateTodoContext } from '../CreateTodoBar'

function DescriptionInput () {
  const context = useContext(CreateTodoContext)

  useEffect(() => {
    console.log(context?.description, 'descript')
  }, [context?.description])
  return (
      <>
        <label>
          Description:
            <input
                type='text'
                value={context?.description}
                onChange={(e) => context?.setDescription(e.target.value)}
                placeholder='Enter description'
            />
        </label>
      </>
  )
}

export default DescriptionInput
