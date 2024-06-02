import {restaurants} from "./data/restaurantData.ts";
import RestaurantCardList from "./components/RestaurantCardList/RestaurantCardList.tsx";

function App() {

    return (
        <>
            <h1>Restaurants</h1>
            <RestaurantCardList restaurants={restaurants} />
        </>
    )
}

export default App
