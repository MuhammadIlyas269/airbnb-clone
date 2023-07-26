import { Route, Routes } from "react-router-dom";
import "./App.css";
import * as pages from "./pages";
import * as components from "./components";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000";

function App() {
  return (
    <Routes>
      <Route path="/" element={<components.Layout />}>
        <Route index element={<pages.IndexPage />} />
        <Route path="/login" element={<pages.LoginPage />} />
        <Route path="/register" element={<pages.RegisterPage />} />
      </Route>
    </Routes>
  );
}
export default App;
