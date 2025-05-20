
const Todo = ({todo, handleDelete, handleStatusChange}) => {

    return (

        <div className="px-2">
            <div className='card mt-2 p-2'>
                 
                <div className="card-title d-flex justify-content-between mb-0">
                    <span className="fw-normal fs-6">
                        Created At:
                    </span>
                    <span className="fw-normal fs-6">{new Date(todo.id).toLocaleString()}</span>
                    
                </div>


                <hr />

                <div className='card-body p-2'>


                <p style={{textDecoration: todo.status === "Completed" ? "line-through":"none"}}>{todo.name}</p>

                </div>


                <div className="d-flex justify-content-between mt-3">
                <select id="todoCard" className="btn btn-sm btn-outline-success" onChange={(e) => handleStatusChange(e, todo.id)} value={todo.status}>
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>

                
                <button className='btn btn-sm btn-danger' onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}


export default Todo;