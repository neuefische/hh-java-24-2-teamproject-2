import {RestaurantType} from "../../model/Restaurant.ts";
import { useNavigate } from "react-router-dom";
import {FaLocationDot} from "react-icons/fa6";
import RestaurantCardDetail from "../RestaurantCardDetail/RestaurantCardDetail.tsx";
import {
    StyledArticle,
    StyledDetailsContainer,
    StyledDetailsTitle,
    StyledFallbackImage,
    StyledImageContainer,
    StyledDetailsButton
} from "./RestaurantCard.styled.ts";

type RestaurantCardProps = {
    restaurant: RestaurantType,
}

export default function RestaurantCard({restaurant}: RestaurantCardProps) {
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate(`/restaurants/${restaurant.id}`);
    };



    return (
        <StyledArticle>
            <StyledImageContainer>
                <StyledFallbackImage src="/restaurant-fallback-image.jpg"
                                     alt={`There is currently no image for ${restaurant.title} available.`}/>
            </StyledImageContainer>
            <StyledDetailsContainer>
                <StyledDetailsTitle>{restaurant.title}</StyledDetailsTitle>
                <RestaurantCardDetail icon={<FaLocationDot/>} value={restaurant.city}/>
                <StyledDetailsButton onClick={handleDetailsClick}>Details</StyledDetailsButton>
            </StyledDetailsContainer>
        </StyledArticle>
    )
}