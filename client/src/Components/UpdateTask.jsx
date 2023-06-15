import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const UpdateUser = () => {

    const { id } = useParams()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [status, setStatus] = useState()
    const navigate = useNavigate()

    //to fetch the record
    useEffect(() => {
        axios.get('http://localhost:3000/getTask/' + id)
            .then(result => {
                console.log(result)
                setTitle(result.data.title)
                setDescription(result.data.description)
                setStatus(result.data.status)
            })
            .catch(err => console.log(err))
    }, []);

    //to update the Task form
    const update = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3000/updateTask/'+id, { title, description, status })
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
                <div className='w-50 bg-white rounded p-3'>
                    <form onSubmit={update}>
                        <h1>Update  Task</h1>
                        <div className='mb-2'>
                            <label>Title</label>
                            <input
                                type="text"
                                placeholder='Enter Title'
                                className='form-control'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className='mb-2'>
                            <label>Description</label>
                            <input
                                type="text"
                                placeholder='Enter Description'
                                className='form-control'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className='mb-2'>
                            <label>Status</label>
                            <input
                                type="text"
                                placeholder='Enter Status'
                                className='form-control'
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                        </div>
                        <button className='btn btn-success'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateUser