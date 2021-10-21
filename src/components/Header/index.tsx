import { useState } from "react";
import Button from "../Button";
import * as S from "./styles";

import Restricted from "../../assets/icons/restricted-area.png";
import Edit from "../../assets/icons/edit.png";
import Menu from "../../assets/icons/menu.svg";
import Consultant from "../../assets/icons/consultant.png";

export default function Header() {
  const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);

  const handleMenuActivation = () => {
    setIsActiveMenu((prevState) => !prevState);
  };
  return (
    <S.Container>
      <S.MenuBar onClick={handleMenuActivation}>
        <img src={Menu} alt="Menu" />
      </S.MenuBar>
      <S.ContainerButtons isActiveMenu={isActiveMenu}>
        <Button color="yellow">
          <img src={Edit} alt="" /> Seja um franqueado
        </Button>
        <Button color="purple">
          <img src={Consultant} alt="" /> Seja um consultor(a)
        </Button>
        <Button color="blue">Quero comprar</Button>
      </S.ContainerButtons>
      <Button color="yellow" restricted>
        <img src={Restricted} alt="" /> Área restrita
      </Button>
    </S.Container>
  );
}
