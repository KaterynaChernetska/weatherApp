import { createPortal } from "react-dom";
import style from "./Modal.module.css";

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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
        repellendus pariatur dolor asperiores ipsam debitis? Minus, atque sunt!
        Ut fugiat magni quam dignissimos soluta exercitationem atque sequi
        consequatur. Doloribus, facere.
      </div>
    </div>,
    modalRoot
  );
};
