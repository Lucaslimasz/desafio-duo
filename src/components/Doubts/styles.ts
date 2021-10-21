import styled, {css} from "styled-components";

export const Container = styled.div<{active: boolean;}>`
  background: #f1f1f1;
  padding: 30px;
  
  button {
    width: 100%;
    background: transparent;
    text-align: left;
    > span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    h1 {
      font-weight: 700;
      font-size: 24px;
      color: #a141eb;
    }

    img {
      width: 25px;
    }

    p {
      font-size: 20px;
      color: #808080;
      margin-top: 20px;
    }

    
    ${({active}) => active && css`
    img {
        transform: rotate(180deg);
      }
    `}
  }

  @media (max-width: 780px){
    button {
      h1 {
        font-size: 18px;
      }
      p{
        font-size: 16px;
        margin-top: 15px;
      }
    }
  }

  @media (max-width: 580px){
    padding: 20px;
    button {
      h1, p {
        max-width: 80%;
      }
    }
  }
`;
