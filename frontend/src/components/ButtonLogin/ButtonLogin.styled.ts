import styled from "styled-components";
import { FaCircleUser } from "react-icons/fa6";

export const StyledFaCircleUser = styled(FaCircleUser)`
  width: 30px;
  height: 30px;

  &:hover {
    cursor: pointer;
    transform: rotate(360deg);
    transition: transform 0.5s ease-in-out;
  }

  &:active {
    transform: scale(0.9);
    transition: transform 0.2s;
  }
`;
