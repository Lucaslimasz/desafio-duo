import styled, { css } from 'styled-components';

interface ColorButton {
  color: 'yellow' | 'blue' | 'purple';
  restricted?:boolean;
}

export const Container = styled.button<ColorButton>`
  padding: 12px 25px;
  background: #E1A607;
  border-radius: 100px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  margin-right: 23px;
  text-transform: uppercase;

  display: flex;
  align-items: center;

  z-index: 100;
  
  img {
    margin-right: 10px;
  }

  ${({color}) => color === 'purple' && css`background: #7928B7;`}
  ${({color}) => color === 'blue' && css`background: #0EB9DA;`}

  ${({restricted}) => restricted && css`
    border-radius: 0 0 10px 10px ;
    position: absolute;
    top: 0;
    right: 3%;

    @media (max-width: 1140px){
      right: 0%;
    }
  `}
`;
