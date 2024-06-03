import {FaSquarePlus} from "react-icons/fa6";
import styled from "styled-components";


const StyledFaSquarePlus = styled(FaSquarePlus)`
    width: 35px;
    height: 35px;
`;

export default function ActionMenu() {
    return (
        <div>
            {<StyledFaSquarePlus />}
        </div>
    )
}