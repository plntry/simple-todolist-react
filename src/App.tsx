import CreateBtn from './components/CreateBtn'
import DescriptionInput from './components/DescriptionInput'
import TitleInput from './components/TitleInput'
import TodosList from './components/TodosList'

function App () {
  return (
    <>
      <TitleInput />
      <DescriptionInput />
      <CreateBtn />
      <TodosList />
    </>
  )
}

export default App
