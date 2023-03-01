import React, { useState } from 'react'
import CreateBtn from '../CreateBtn'
import DescriptionInput from '../Inputs/DescriptionInput'
import TitleInput from '../Inputs/TitleInput'
import './CreateTodoBar.css'

export const CreateTodoContext = React.createContext<ICreateNewTodoContext | null>(null)

function CreateTodoBar () {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [isTitleEmpty, setIsTitleEmpty] = useState(false)
  const [isDescriptionEmpty, setIsDescriptionEmpty] = useState(false)

  const value: ICreateNewTodoContext = {
    title,
    setTitle,
    description,
    setDescription,
    isTitleEmpty,
    setIsTitleEmpty,
    isDescriptionEmpty,
    setIsDescriptionEmpty
  }

  return (
    <CreateTodoContext.Provider value={value}>
        <div className='container'>
          <TitleInput />
          <DescriptionInput />
          <CreateBtn />
        </div>
    </CreateTodoContext.Provider>
  )
}

export default CreateTodoBar
