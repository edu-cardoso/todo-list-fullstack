import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Register />}
        />
        <Route
          exact
          path="/login"
          element={<Login />}
        />
        <Route
          exact
          path="/tasks"
          element={<Tasks />}
        />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
