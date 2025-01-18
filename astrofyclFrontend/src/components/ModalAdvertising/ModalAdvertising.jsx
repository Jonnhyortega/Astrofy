import React from "react";
import { Modal } from "./ModalAdvertisingStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { hourglass } from "ldrs";
hourglass.register();

export default function ModalAdvertising({ text, work, boolean, loader }) {
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
          {loader && (
            <l-hourglass
              size="40"
              bg-opacity="0.1"
              speed="1.75"
              color="black"
            ></l-hourglass>
          )}
        </div>
      </div>
    </Modal>
  );
}
