import React from "react";


function TodoItem({todo, onChange }) {
return (
<tr>
    <td> <label>
        <input type="checkbox"
               onChange ={() => onChange(todo._id)} checked={todo.Checked} />
        <span></span>
    </label> </td>
    <td>{todo._id}</td>
    <td>{todo.email}</td>
    <td>{todo.regDate} </td>
    <td>{todo.logDate}</td>
    <td>{todo.Status}</td>
</tr>
)
}

export default TodoItem
