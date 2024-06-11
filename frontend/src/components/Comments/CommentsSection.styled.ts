import styled from "styled-components";

export const StyledCommentButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  color: white;
  background-color: #6200ea;

  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: color-mix(in srgb, #6200ea 70%, white);
  }

  &:active {
    background-color: color-mix(in srgb, #6200ea 80%, black);
  }
`;

export const StyledCommentInput = styled.input`
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
`;

export const StyledCommentList = styled.li`
  list-style: none;
  padding: 2px;
  text-decoration: none;
  border: 1px solid #ccc;
  padding-left: 10px;
  margin-top: 3px;
  margin-bottom: 3px;
`;
