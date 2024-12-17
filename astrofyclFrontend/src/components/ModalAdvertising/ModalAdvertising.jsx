import React from "react";
import { Modal } from "./ModalAdvertisingStyles";
import { LogoHome } from "../Loader/LogoHome";
export default function ModalAdvertising({ text, work }) {
  return (
    <Modal>
      <div>
        <article>
          <span>ASTROFY</span>
          <small>imports</small>
        </article>
        <div className="content">
          <p>{text}</p>
          <button onClick={work}>Ok</button>
        </div>
      </div>
    </Modal>
  );
}
