import ViewRestaurantPage from "./pages/ViewRestaurantPage.tsx";
import { Route, Routes } from "react-router-dom";
import CreateRestaurantPage from "./pages/CreateRestaurantPage.tsx";
import UpdateRestaurantPage from "./pages/UpdateRestaurantPage.tsx";
import "./App.css";
import RestaurantsPage from "./pages/RestaurantsPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RestaurantsPage />} />
      <Route path="/restaurants/add" element={<CreateRestaurantPage />} />
      <Route path="/restaurants/edit/:id" element={<UpdateRestaurantPage />} />
      <Route path="/restaurants/:id" element={<ViewRestaurantPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
