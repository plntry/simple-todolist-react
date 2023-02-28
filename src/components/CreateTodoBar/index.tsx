import React, { useState } from 'react'
import CreateBtn from '../CreateBtn'
import DescriptionInput from '../DescriptionInput'
import TitleInput from '../TitleInput'

export const CreateTodoContext = React.createContext<ICreateNewTodoContext | null>(null)

function CreateTodoBar () {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const value: ICreateNewTodoContext = {
    title,
    setTitle,
    description,
    setDescription
  }

  return (
    <CreateTodoContext.Provider value={value}>
        <TitleInput />
        <DescriptionInput />
        <CreateBtn />
    </CreateTodoContext.Provider>
  )
}

export default CreateTodoBar
