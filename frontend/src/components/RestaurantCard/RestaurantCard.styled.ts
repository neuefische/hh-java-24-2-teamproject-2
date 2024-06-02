import styled from "styled-components";

export const StyledArticle = styled.article`
    display: flex;
    gap: 10px;
    padding: .7rem;
    border: 1px solid lightgray;
    border-radius: 10px;
`;

export const StyledImageContainer = styled.div`
    width: 40%;
`;

export const StyledFallbackImage = styled.img`
    border-radius: 10px;
    filter: blur(2px);
`;

export const StyledDetailsContainer = styled.div`
    width: 60%;
`;

export const StyledDetailsTitle = styled.h2`
    margin-bottom: 5px;
`;