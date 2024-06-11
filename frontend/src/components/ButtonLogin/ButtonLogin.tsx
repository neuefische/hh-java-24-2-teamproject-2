import { StyledFaCircleUser } from "./ButtonLogin.styled.ts";

type ButtonLogin = {
  loginToPlatform: () => void;
};

export default function ButtonLogin({ loginToPlatform }: ButtonLogin) {
  return <StyledFaCircleUser onClick={loginToPlatform}></StyledFaCircleUser>;
}
