import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import CreateUser from './Components/CreateTask';
import UpdateUser from './Components/UpdateTask';
import Tasks from './Components/Tasks'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/update/:id" element={<UpdateUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
