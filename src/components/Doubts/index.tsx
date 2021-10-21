import { useState } from "react";
import * as S from "./styles";

import Arrow from "../../assets/icons/arrow.png";

interface InformationsProps {
  title: string;
  description: string;
}

export default function Doubts(props: InformationsProps) {
  const [isActiveDescription, setIsActiveDescription] =
    useState<boolean>(false);

  const handleDescriptionActivation = () => {
    setIsActiveDescription((prevState) => !prevState);
  };

  return (
    <S.Container active={isActiveDescription}>
      <button onClick={handleDescriptionActivation}>
        <span>
          <h1>{props.title}</h1>
          <img src={Arrow} alt="Seta" />
        </span>
        {isActiveDescription && <p>{props.description}</p>}
      </button>
    </S.Container>
  );
}
