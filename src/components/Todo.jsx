
const Todo = ({todo, handleDelete}) => {

    return (

        <div className="px-2">
            <div className='card mt-2 p-2'>
                 
                <div className="card-title d-flex justify-content-between">
                    <div className="fw-semibold">
                        Created At:
                    </div>
                    <div>{new Date(todo.id).toLocaleString()}</div>
                    
                </div>
                <hr />

                <div className='card-body p-2'>

                <p>{todo.name}</p>

                <button className='btn btn-sm btn-danger float-end' onClick={() => handleDelete(todo.id)}>Delete</button>

                </div>
            </div>
        </div>
    )
}


export default Todo;