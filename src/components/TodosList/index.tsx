import { useSelector } from 'react-redux'
import { selectTodos } from '../../store/todosSlice'
import TodoItem from '../TodoItem'

function TodosList () {
  const todos = Object.values(useSelector(selectTodos))[0]

  return (
    <>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>DESCRIPTION</th>
                <th>STATUS</th>
            </tr>
        </thead>
        <tbody>
            {(todos.map((todo: ITodo) => {
              return (
                  <TodoItem
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    description={todo.description}
                    status={todo.status}
                  />
              )
            }))}
        </tbody>
      </table>
    </>
  )
}

export default TodosList
