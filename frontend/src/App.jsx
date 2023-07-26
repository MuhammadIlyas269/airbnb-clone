import { Route, Routes } from "react-router-dom";
import "./App.css";
import * as pages from "./pages";
import * as components from "./components";
import axios from "./api/axios";
import { UserContextProvider } from "./store/UserContext";
import { useEffect } from "react";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<components.Layout />}>
          <Route index element={<pages.IndexPage />} />
          <Route path="/login" element={<pages.LoginPage />} />
          <Route path="/register" element={<pages.RegisterPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}
export default App;
