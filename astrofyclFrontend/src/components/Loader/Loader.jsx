import React from "react";
import styled, { keyframes } from "styled-components";
import { dotStream } from "ldrs";
dotStream.register();

const Loader = () => {
  return (
    <div>
      <l-dot-stream size="60" speed="2.5" color="black"></l-dot-stream>{" "}
    </div>
  );
};

export default Loader;
