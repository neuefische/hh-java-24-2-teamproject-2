import {StyledDetailContainer} from "./RestaurantCardDetail.styled.ts";

type RestaurantCardDetailProps = {
    icon: React.ReactElement,
    value: string,
}

export default function RestaurantCardDetail({icon, value} : RestaurantCardDetailProps) {
    return (
        <StyledDetailContainer>
            <div>{icon}</div>
            <div>{value}</div>
        </StyledDetailContainer>
    )
}