import styled from "styled-components";

import Background from "../../assets/background.png";

export const Container = styled.div`
  footer {
    width: 100%;
    height: 100px;
    background: #A141EB;
  }
`;

export const Apresentation = styled.div`
  width: 100%;
  height: 80vh;
  padding: 0 50px;

  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;

  div{
    max-width: 50%;
  }
  
  h1 {
    font-weight: 900;
    font-size: 53px;
    color: #e1a607;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 20px;
    color: #848484;
    width: 70%;
  }
  b{
    font-weight: 600;
    color: #5b5b5b;
  }
  
  a{
    border-bottom: 1px solid #A141EB;
    font-weight: 600;
    color: #A141EB;
  }

  @media (max-width: 970px){
    padding: 0 20px;
    div {
      max-width: 75%;
    }
  }

  @media (max-width: 650px){
    div {
      max-width: 90%;
    }
  }
`;
