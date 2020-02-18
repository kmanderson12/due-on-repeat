import styled, { createGlobalStyle } from 'styled-components';

const Modal = props => {
  return (
    <ModalBackground>
      <OverflowHidden />
      <ModalCard>{props.children}</ModalCard>
    </ModalBackground>
  );
};

export default Modal;

const ModalBackground = styled.div`
  position: fixed;
  overflow: auto;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;
const ModalCard = styled.div`
  background: white;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 20px;
  max-width: 700px;
  min-height: 70vh;
  width: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 500px) {
    position: absolute;
    top: 0;
    min-height: 100vh;
    border-radius: 0px;
    overflow-y: scroll;
  }
`;

const OverflowHidden = createGlobalStyle`
  body {
    position: fixed;
    overflow: hidden;
  }
`;
