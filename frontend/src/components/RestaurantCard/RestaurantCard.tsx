import {RestaurantType} from "../../model/Restaurant.ts";
import {FaLocationDot} from "react-icons/fa6";
import RestaurantCardDetail from "../RestaurantCardDetail/RestaurantCardDetail.tsx";
import {
    StyledArticle,
    StyledDetailsContainer,
    StyledDetailsTitle,
    StyledFallbackImage,
    StyledImageContainer
} from "./RestaurantCard.styled.ts";

type RestaurantCardProps = {
    restaurant: RestaurantType,
}

export default function RestaurantCard({restaurant}: RestaurantCardProps) {
    return (
        <StyledArticle>
            <StyledImageContainer>
                <StyledFallbackImage src="/restaurant-fallback-image.jpg"
                                     alt={`There is currently no image for ${restaurant.title} available.`}/>
            </StyledImageContainer>
            <StyledDetailsContainer>
                <StyledDetailsTitle>{restaurant.title}</StyledDetailsTitle>
                <RestaurantCardDetail icon={<FaLocationDot/>} value={restaurant.city}/>
            </StyledDetailsContainer>
        </StyledArticle>
    )
}