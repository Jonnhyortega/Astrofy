import React from "react";
import { Modal } from "./ModalAdvertisingStyles";
import { LogoHome } from "../Loader/LogoHome";
export default function ModalAdvertising({ text, work }) {
  return (
    <Modal>
      <LogoHome />
      <div className="content">
        <p>{text}</p>
        <button onClick={work}>Ok</button>
      </div>
    </Modal>
  );
}
