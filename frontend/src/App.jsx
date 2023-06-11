import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";

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
    </>
  )
}

export default App
