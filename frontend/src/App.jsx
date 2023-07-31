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
          <Route path="/account" element={<pages.ProfilePage />} />
          <Route path="/account/places" element={<pages.PlacesPage />} />
          <Route
            path="/account/places/new"
            element={<pages.PlacesFormPage />}
          />
          <Route
            path="/account/places/:id"
            element={<pages.PlacesFormPage />}
          />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}
export default App;
