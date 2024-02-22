import { createPortal } from "react-dom";
import style from "./Modal.module.css";
import AddTripForm from "./AddTripForm";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ onClose }) => {
  return createPortal(
    <div className={style.modal}>
      <div className={style.addTripPopUp}>
        <div className={style.modalHeader}>
          <h4>Create trip</h4>
          <button className={style.modalCloseBtn} onClick={onClose}>
            ×
          </button>
        </div>
        <AddTripForm onClose={onClose}/>
      </div>
    </div>,
    modalRoot
  );
};
