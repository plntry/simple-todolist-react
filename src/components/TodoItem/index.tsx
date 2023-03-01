/* eslint-disable no-constant-condition */
import { useState } from 'react'
import StatusCheckbox from '../StatusCheckbox'
import TodoInfoModal from '../TodoInfoModal'

const TodoItem: React.FC<ITodoItemComp> = (props: ITodoItemComp) => {
  const [isCheckedStatus, setIsCheckedStatus] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const { id, title, description, status } = props

  const slicedText = (text: string) => {
    return text.length > 13 ? text.slice(0, 12).concat('...') : text
  }

  const arrOfFields = [`${id}.`, slicedText(title), slicedText(description), status]

  const handleOnChangeStatus = () => {
    console.log('status changed')

    setIsCheckedStatus(!isCheckedStatus)
  }

  const handleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
      {arrOfFields.map((field) => {
        return (
          <td key={arrOfFields.indexOf(field)} onClick={handleModal}>
            {typeof field === 'boolean'
              ? <StatusCheckbox
                  handleOnChangeStatus={handleOnChangeStatus}
                  isCheckedStatus={isCheckedStatus}
                />
              : <>{field}</>
            }
          </td>
        )
      })}
      {openModal
        ? <td><TodoInfoModal key={id}
                            title={title}
                            description={description}
                            isCheckedStatus={isCheckedStatus}
                            handleOnChangeStatus={handleOnChangeStatus}
                            handleModal={handleModal} /></td>
        : <></>}
    </>
  )
}

export default TodoItem
