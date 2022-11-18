import { ImgContainer, Image } from "./style";
import loginAndRegisterImg from "../../img/monochrome.svg";

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
