const StatusCheckbox: React.FC<IStatusCheckbox> = ({ handleOnChangeStatus, isCheckedStatus }: IStatusCheckbox) => {
  return (
    <>
        <input
            type='checkbox'
            name='statusCheckbox'
            onChange={handleOnChangeStatus}
            checked={isCheckedStatus}
        />
    </>
  )
}

export default StatusCheckbox
