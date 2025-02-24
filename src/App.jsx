import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react'
import Todo from './components/Todo';

function App() {

  const [todos, setTodos] = useState([]);

  const [task, setTask] = useState('');

  const [status, setStatus] = useState('Not Started');



  const addTodoHandler = () => {

    if(task.trim() !== "")
      {
        setTodos((prev) => [...prev, {id: Date.now(), name: task, status: status}])
      }

    setTask('');
    setStatus('Not Started')

  }


  const handleDelete = (id) => {


    const filtered = todos.filter((todo) => todo.id !== id)

    setTodos(filtered)  
  }



  return (
    <main className='container my-4'>
      
      <h1 className='mb-3'>TaskWhiz</h1>

      <div className='d-flex justify-content-between p-2'>
      <input type='text' value={task} onChange={(e) => setTask(e.target.value)} className='form-control w-50' placeholder='Please enter a todo task here...'/>
      

      <div className='d-flex'>
      <select value={status} onChange={(e) => setStatus(e.target.value)} className='form-select w-auto'>
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <button className='btn btn-success ms-3' onClick={addTodoHandler}>Add Todo</button>
      </div>
      
      </div>

      <hr />
      


      <div className='row py-5'>
        
          <div className='col-md-4'>

            <h3>Not Started</h3>

            <div className='row mt-3'>
            {todos.filter((todo) => todo.status === "Not Started").map((todo, index) => (
              
                <Todo key={todo.id} todo={todo}  handleDelete={handleDelete} />
              
            ))}
          </div>
            
          </div>

          <div className='col-md-4'>
           
            <h3>In Progress</h3>

            <div className='row mt-3'>
            {todos.filter((todo) => todo.status === "In Progress").map((todo, index) => (
              
                <Todo key={todo.id} todo={todo}  handleDelete={handleDelete} />
          
            ))}
          </div>
            
          </div>

          <div className='col-md-4'>

            <h3>Completed</h3>

            <div className='row mt-3'>
            {todos.filter((todo) => todo.status === "Completed").map((todo, index) => (
              
                <Todo key={todo.id} todo={todo}  handleDelete={handleDelete} />
              
            ))}
          </div>

          </div>
   
      </div>
      
    </main>
  )
}

export default App
