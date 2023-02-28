import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../store'
import { addNewTodo, selectTodos } from '../../store/todosSlice'
import TodoItem from '../TodoItem'

function TodosList () {
  const dispatch = useAppDispatch()

  const todos = (useSelector(selectTodos))
  console.log(todos, 'todos')

  useEffect(() => {
    dispatch(addNewTodo(1))
  }, [dispatch])

  return (
    <>
      <TodoItem />
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
            <tr>
                <td>1.</td>
                <td>title1</td>
                <td>Maria Anders FDSF SDF SDF DF SF DSF F SDFSDFS</td>
                <td>false</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang dsf adfewg af adsf dsf gw2e gwwe </td>
                <td>true</td>
            </tr>
        </tbody>
      </table>
    </>
  )
}

export default TodosList
