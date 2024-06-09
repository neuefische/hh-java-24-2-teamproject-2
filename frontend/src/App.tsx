import RestaurantDetailsPage from "./pages/RestaurantDetailsPage.tsx";
import { Route, Routes } from "react-router-dom";
import AddRestaurantsPage from "./pages/AddRestaurantsPage.tsx";
import RestaurantEditPage from "./pages/RestaurantEditPage.tsx";
import "./App.css";
import RestaurantsPage from "./pages/RestaurantsPage.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RestaurantsPage />} />
      <Route path="/restaurants/add" element={<AddRestaurantsPage />} />
      <Route path="/restaurants/edit/:id" element={<RestaurantEditPage />} />
      <Route path="/restaurants/:id" element={<RestaurantDetailsPage />} />
    </Routes>
  );
}

export default App;
