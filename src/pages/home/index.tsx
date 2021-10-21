import { useEffect, useState } from "react";
import { api } from "../../config/api";

import Doubts from "../../components/Doubts";
import Header from "../../components/Header";
import * as S from "./styles";

interface DoubtsInformations {
  id: number;
  titulo: string;
  descricao: string;
}

export default function Home() {
  const [informations, setInformations] = useState<DoubtsInformations[]>([]);
  useEffect(() => {
    (async () => {
      const response: { data: DoubtsInformations[] } = await api.get(
        "/lista_tarefas"
      );
      setInformations(response.data);
    })();
  }, []);

  return (
    <S.Container>
      <Header />
      <S.Apresentation>
        <div>
          <h1>Dúvidas</h1>
          <p>
            <b>Listamos aqui algumas dúvidas frequentes</b>, caso a sua dúvida
            não esteja aqui você pode entrar em contato conosco{" "}
            <a href="/">clicando aqui</a>
          </p>
        </div>
      </S.Apresentation>
      {informations.map((info) => (
        <Doubts key={info.id} title={info.titulo} description={info.descricao}/>
      ))}

      <footer></footer>
    </S.Container>
  );
}
