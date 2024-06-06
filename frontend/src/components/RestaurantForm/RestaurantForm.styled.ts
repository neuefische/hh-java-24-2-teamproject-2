import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledFormBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 1.5rem;
`;

export const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const StyledInputField = styled.input`
  border-radius: 4px;
  padding: 2px 5px;
`;

export const StyledFieldError = styled.p`
  color: red;
  font-size: 0.9rem;
  margin: 0 0.3rem;
`;
