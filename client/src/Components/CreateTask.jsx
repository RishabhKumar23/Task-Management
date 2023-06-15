import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')
    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/createTask', {title, description, status})
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
                    <form onSubmit={submit}>
                        <h1>ADD Task</h1>
                        <div className='mb-2'>
                            <label>Title</label>
                            <input
                                type="text"
                                placeholder='Enter Title'
                                className='form-control'
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className='mb-2'>
                            <label>Description</label>
                            <input
                                type="text"
                                placeholder='Enter Description'
                                className='form-control'
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className='mb-2'>
                            <label>Status</label>
                            <input
                                type="text"
                                placeholder='Enter Status'
                                className='form-control'
                                onChange={(e) => setStatus(e.target.value)}
                            />
                        </div>
                        <button className='btn btn-success'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser