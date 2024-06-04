import RestaurantsPage from "./pages/RestaurantsPage.tsx";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails.tsx";
import {Route, Routes} from "react-router-dom";
import AddRestaurantsPage from "./pages/AddRestaurantsPage.tsx";
import './App.css'

function App() {

    return (
        <Routes>
            <Route path="/" element={<RestaurantsPage />}/>
            <Route path="/restaurants/:id" element={<RestaurantDetails />}/>
            <Route path="/restaurants/add" element={<AddRestaurantsPage />}/>
        </Routes>
    )
}

export default App
