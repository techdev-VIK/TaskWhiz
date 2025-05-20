import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react'
import Todo from './components/Todo';
import { toast } from 'react-toastify';

function App() {

  const [todos, setTodos] = useState([]);

  const [task, setTask] = useState('');

  const [status, setStatus] = useState('');


  const statuses = ["Not Started", "In Progress", "Completed"];



  useEffect(() => {
    const storedTodos = localStorage.getItem('myTodos');

    if(storedTodos){
      setTodos(JSON.parse(storedTodos))
    }
  },[])


  useEffect(() => {
    if(todos.length > 0){
      localStorage.setItem('myTodos', JSON.stringify(todos))
    }
  }, [todos])


  const addTodoHandler = () => {

    if(task.trim() !== "")
      {
        const newTodo = {id: Date.now(), name: task, status: status};
        setTodos((prev) => [...prev, newTodo]);
      }

      setTask('');
      setStatus('');

      toast.success("Todo added!");

  }


  const handleDelete = (id) => {


    const filtered = todos.filter((todo) => todo.id !== id);

    setTodos(filtered);
    toast.error("Todo deleted!");
  }


  const handleStatusChange = (e, id) => {

      const {value} = e.target;

      const statusChange = todos.map((todo) => (
        todo.id === id ? {...todo, status: value} : todo
      ))


      setTodos(statusChange);
      toast.info("Todo status updated!");

  }


  return (
    <main className='container my-4'>
      
      <h1 className='mb-3'>TaskWhiz</h1>

      <div className='d-flex justify-content-between p-2'>
      <input type='text' value={task} onChange={(e) => setTask(e.target.value)} className='form-control w-50' placeholder='Please enter a todo task here...'/>
      

      <div className='d-flex'>
      <select value={status} onChange={(e) => setStatus(e.target.value)} className='form-select w-auto'>
        <option value="" disabled>Choose Status</option>
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <button className='btn btn-success ms-3' onClick={addTodoHandler}> + Add Todo</button>
      </div>
      
      </div>

      <hr />



      <div className="row">

        {statuses.map((statusType) => (
          <div className='col-md-4 mt-5' key={statusType}>
            <h3>{statusType}</h3>
            <div className='row mt-3'>
            {todos.filter((stat) => stat.status === statusType).map((todo) => (
              <Todo key={todo.id} todo={todo}  handleDelete={handleDelete} handleStatusChange={handleStatusChange} />
            ))}
            </div>
          </div>
        ))}
        
      </div>

      
    </main>
  )
}

export default App
