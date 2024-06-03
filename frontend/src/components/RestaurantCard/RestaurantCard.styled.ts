import styled from "styled-components";

export const StyledArticle = styled.article`
    display: flex;
    gap: 10px;
    padding: .7rem;
    border: 1px solid var(--default-border-color);
    border-radius: var(--default-border-radius);
    background-color: white;
`;

export const StyledImageContainer = styled.div`
    width: 40%;
`;

export const StyledFallbackImage = styled.img`
    border-radius: var(--default-border-radius);
    filter: blur(2px);
`;

export const StyledDetailsContainer = styled.div`
    width: 60%;
`;

export const StyledDetailsTitle = styled.h2`
    margin-bottom: 5px;
`;

export const StyledDetailsButton = styled.button`
  background-color: #6200ea;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #3700b3;
  }

  &:active {
    background-color: #03dac5;
  }
`;