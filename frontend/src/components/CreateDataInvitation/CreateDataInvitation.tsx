import Button from "../Button/Button.tsx";
import { StyledParagraph } from "./CreateDataInvitation.styled.ts";

export default function CreateDataInvitation() {
  return (
    <>
      <StyledParagraph>
        Create your first restaurant! All your restaurants will be displayed
        here.
      </StyledParagraph>
      <Button href="/restaurants/add">Add restaurant</Button>
    </>
  );
}
