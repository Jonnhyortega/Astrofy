import React from "react";
import { Modal } from "./ModalAdvertisingStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ModalAdvertising({ text, work, boolean }) {
  return (
    <Modal>
      <div>
        <article>
          <span>ASTROFY</span>
          <small>imports</small>
        </article>
        <div className="content">
          <p style={{ color: "black" }}>{text}</p>
          {boolean == false && (
            <button className="button-modal" onClick={work}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}
