import { StyledDetailContainer } from "./RestaurantCardDetail.styled.ts";
import React from "react";

type RestaurantCardDetailProps = {
  icon: React.ReactElement;
  value: string;
};

export default function RestaurantCardDetail({
  icon,
  value,
}: Readonly<RestaurantCardDetailProps>) {
  return (
    <StyledDetailContainer>
      <div>{icon}</div>
      <div>{value}</div>
    </StyledDetailContainer>
  );
}
