import styled from "styled-components";
import AddItemForm from "../components/AddItemForm";

const Modal = props => {
  return (
    <ModalBackground>
      <ModalCard>
        <AddItemForm cancel={props.closeModal} />
      </ModalCard>
    </ModalBackground>
  );
};

export default Modal;

const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
`;
