import { useState } from 'react'

const TodoItem: React.FC<ITodo> = (props: ITodo) => {
  const { id, title, description, status } = props
  const arrOfFields = [`${id}.`, title, description, status]

  const [isCheckedStatus, setIsCheckedStatus] = useState(false)

  const handleOnChangeStatus = () => {
    setIsCheckedStatus(!isCheckedStatus)
  }

  return (
    <tr>
      {arrOfFields.map((field) => {
        return (
          <td key={arrOfFields.indexOf(field)}>
            {typeof field === 'boolean'
              ? <input
                    type='checkbox'
                    name='statusCheckbox'
                    onChange={handleOnChangeStatus}
                />
              : <>{field}</>
            }
          </td>
        )
      })}
    </tr>
  )
}

export default TodoItem
