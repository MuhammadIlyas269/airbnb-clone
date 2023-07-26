import { Route, Routes } from "react-router-dom";
import "./App.css";
import * as pages from "./pages";
import * as components from "./components";
import { UserContextProvider } from "./store/UserContext";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<components.Layout />}>
          <Route index element={<pages.IndexPage />} />
          <Route path="/login" element={<pages.LoginPage />} />
          <Route path="/register" element={<pages.RegisterPage />} />
          <Route path="/account/:subpage?" element={<pages.AccountPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}
export default App;
