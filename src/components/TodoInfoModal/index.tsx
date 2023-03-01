import StatusCheckbox from '../StatusCheckbox'
import './TodoInfoModal.css'

const TodoInfoModal: React.FC<IModalComp> = (props: IModalComp) => {
  const { title, description, isCheckedStatus, handleOnChangeStatus, handleModal } = props

  return (
    <div className='modal'>
      <section className='modal-main'>
          <h2>{title}</h2>
          <h4>Description:</h4>
          <p>{description}</p>
          <div>
            <label>Status:
              <StatusCheckbox
                handleOnChangeStatus={handleOnChangeStatus}
                isCheckedStatus={isCheckedStatus}
              />
            </label>
          </div>
        <button
          onClick={handleModal}
        >
          Close
        </button>
      </section>
    </div>
  )
}

export default TodoInfoModal
