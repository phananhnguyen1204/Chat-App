// import { CallIcon, ChatIcon, DocumentIcon } from "./svg";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
function App() {
  // const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { token } = user;

  return (
    <div className="dark">
      <Router>
        <Routes>
          <Route
            path="/"
            element={token ? <Home></Home> : <Navigate to="/login"></Navigate>}
          ></Route>
          <Route
            path="/login"
            element={!token ? <Login></Login> : <Navigate to="/"></Navigate>}
          ></Route>
          <Route
            path="/register"
            element={
              !token ? <Register></Register> : <Navigate to="/"></Navigate>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
