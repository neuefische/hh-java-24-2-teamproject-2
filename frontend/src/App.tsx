import RestaurantsPage from "./pages/RestaurantsPage.tsx";
import {Route, Routes} from "react-router-dom";
import AddRestaurantsPage from "./pages/AddRestaurantsPage.tsx";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<RestaurantsPage/>}/>
                <Route path="/restaurants/add" element={<AddRestaurantsPage />}/>

            </Routes>
        </>
    )
}

export default App
