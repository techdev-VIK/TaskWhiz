
const Todo = ({todo, handleDelete, handleStatusChange}) => {

    return (

        <div className="px-2">
            <div className='card mt-2 p-2'>
                 
                <div className="card-title d-flex justify-content-between">
                    <div className="fw-semibold">
                        Created At:
                    </div>
                    <div>{new Date(todo.id).toLocaleString()}</div>
                    
                </div>

                <div className="d-flex justify-content-between mt-3">
                <select id="" className="btn btn-sm btn-outline-success" onChange={(e) => handleStatusChange(e, todo.id)}>
                    <option value="">Change Status</option>
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>

                
                <button className='btn btn-sm btn-danger' onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>


                <hr />

                <div className='card-body p-2'>


                <p style={{textDecoration: todo.status === "Completed" ? "line-through":"none"}}>{todo.name}</p>

                </div>
            </div>
        </div>
    )
}


export default Todo;