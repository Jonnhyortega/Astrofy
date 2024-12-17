import styled from "styled-components";

export const ContactWrapper = styled.div`
  background-color: #222;
  color: #fff;
  padding: 3rem 2rem;
  font-family: "Roboto", sans-serif;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: fadeIn 1.2s ease-out;

  h3 {
    font-weight: bold;
    font-size: 2.8rem;
    text-transform: uppercase;
    background: linear-gradient(135deg, #ff6600, #ff9900);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 2rem;

    @media (max-width: 368px) {
      font-size: 1.8rem;
    }
  }

  .info-section {
    margin-bottom: 1.5rem;

    h4 {
      font-size: 1.6rem;
      font-weight: bold;
    }

    p {
      font-size: 1.2rem;
      color: #ddd;
      line-height: 1.6;
    }
  }

  .map-container {
    margin-top: 1rem;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    iframe {
      border: none;
      width: 80%;
      height: 350px;
      transition: all 0.3s ease;
    }

    &:hover iframe {
      transform: scale(1.05);
    }
  }

  .social-icons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 1.5rem;

    a {
      color: #fff;
      font-size: 1.8rem;
      transition: color 0.3s ease;

      &:hover {
        color: #ff6600;
      }
    }
  }

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
