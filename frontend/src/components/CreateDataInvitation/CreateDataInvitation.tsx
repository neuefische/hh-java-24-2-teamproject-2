import { StyledParagraph } from "./CreateDataInvitation.styled.ts";
import ButtonLink from "../ButtonLink/ButtonLink.tsx";

export default function CreateDataInvitation() {
  return (
    <>
      <StyledParagraph>
        Create your first restaurant! All your restaurants will be displayed
        here.
      </StyledParagraph>
      <ButtonLink href="/restaurants/add">Add restaurant</ButtonLink>
    </>
  );
}
