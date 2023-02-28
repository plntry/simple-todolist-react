import { useState } from 'react'

const TodoItem: React.FC<ITodo> = (props: ITodo) => {
  const [isCheckedStatus, setIsCheckedStatus] = useState(false)

  const { id, title, description, status } = props

  const slicedText = (text: string) => {
    return text.length > 13 ? text.slice(0, 13).concat('...') : text
  }

  const arrOfFields = [`${id}.`, slicedText(title), slicedText(description), status]

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
