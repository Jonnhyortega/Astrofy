import styled from "styled-components";

export const OurStoryWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  overflow: hidden;

  .story-content {
    text-align: center;
    color: #333;
    animation: fadeIn 1s ease-in-out;
  }

  h2 {
    font-size: 2.5rem;
    width: 100%;

    color: var(--orange);
    font-weight: bold;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;

    /* Underline effect */
    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 3px;
      background: #007bff;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease-in-out;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }

  p {
    font-size: 1.3rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    width: 100%;
    text-align: center;
    color: white;
    opacity: 0.8;
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }

  .values {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
  }

  .value {
    flex: 1;
    min-width: 200px;
    background: transparent;
    border: 1px solid var(--orange);
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    position: relative;
    overflow: hidden;

    &:hover {
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
    }

    h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--orange);
      position: relative;

      /* Glow effect */
      &:hover {
        // text-shadow: 0 0 10px #007bff, 0 0 20px #007bff;
      }
    }

    p {
      font-size: 1rem;
      color: black;
      font-weight: bold;
      transition: color 0.6s ease-in-out;
    }

    /* Decorative background animation */
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      z-index: -1;
    }

    &:hover::before {
      opacity: 1;
    }
  }

  /* Keyframe animation for fade-in effect */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
