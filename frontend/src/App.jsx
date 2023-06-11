import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Register />}
        />
      </Routes>
    </>
  )
}

export default App
