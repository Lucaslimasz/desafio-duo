import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px 50px;
  position: absolute;

  &::after {
    content: "";
    background: #a141eb;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 53%;
    height: 100px;

    border-bottom-right-radius: 60px;
  }

  @media (max-width: 1140px) {
    padding: 20px 15px;
    button {
      margin-right: 15px;
    }
  }
`;

export const ContainerButtons = styled.div<{ isActiveMenu: boolean }>`
  display: flex;
  align-items: center;
  @media (max-width: 1030px) {
    ${({ isActiveMenu }) =>
      isActiveMenu
        ? css`
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.8);

            justify-content: center;
            flex-direction: column;
            button {
              margin: 10px 0;
            }
            &::after {
              z-index: -1;
            }
          `
        : css`
            display: none;
          `}
  }
`;

export const MenuBar = styled.div`
  z-index: 200;
  img {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 200;
    width: 45px;
    height: 45px;
  }

  @media (min-width: 1030px) {
    display: none;
  }
`;
