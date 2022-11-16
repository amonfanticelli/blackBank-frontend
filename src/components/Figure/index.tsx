import { ImgContainer, Image } from "./style";
import loginAndRegisterImg from "../../img/man.svg";

export const Img = () => {
  return (
    <ImgContainer>
      <Image
        src={loginAndRegisterImg}
        alt="garota cartonesca com celular na mão"
      />
    </ImgContainer>
  );
};
