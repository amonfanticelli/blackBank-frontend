import { ImgContainer, Image } from "./style";
import loginAndRegisterImg from "../../assets/monochrome.svg";

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
