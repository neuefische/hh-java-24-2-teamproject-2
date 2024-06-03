import { Routes, Route } from "react-router-dom";
import RestaurantsPage from "./pages/RestaurantsPage.tsx";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails.tsx";
function App() {

    return (

        <Routes>
            <Route path="/" element={<RestaurantsPage />} />
            <Route path="/restaurants/:id" element={<RestaurantDetails />} />
            {/* Weitere Routen hier hinzufügen, falls nötig */}
        </Routes>


    /*<>
        <RestaurantsPage />
    </>*/
    )
}

export default App
