import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'
import axios from 'axios'

const Tasks = () => {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000')
    .then(result => setTasks(result.data))
    .catch(err => console.log(err))
  }, []);

  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/deleteTask/'+id)
    .then(res => {console.log(res)
    window.location.reload()})
    .catch(error => console.log(error))
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <Link to='/create' className='btn btn-success'>ADD +</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              tasks.map((task) => {
                return <tr key={task}>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{task.status}</td>
                  <td>
                    <Link to={`/update/${task._id}`} className='btn btn-success'>Update</Link>
                    <button className='btn btn-danger' 
                    onClick={(e)=> handleDelete(task._id)}>Delete</button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Tasks