import TodoItem from '../TodoItem'

function TodosList () {
  return (
    <>
      todos list
      <TodoItem />
      <table>
        <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>STATUS</th>
        </tr>
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
      </table>
    </>
  )
}

export default TodosList
