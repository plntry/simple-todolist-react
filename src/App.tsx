import CreateTodoBar from './components/CreateTodoBar'
import TodosList from './components/TodosList'
import './App.css'

function App () {
  return (
    <div className='App-container'>
      <CreateTodoBar />
      <TodosList />
    </div>
  )
}

export default App
