import styled from "styled-components";
import { Form as FormStyled } from "formik";

export const Form = styled(FormStyled)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  width: 50%;
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  padding: 70px;
  margin: 0 auto;
`;

export const FormBoxInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 550px) {
    grid-template-columns: 1fr; /* Cambia a una sola columna en pantallas de 550px o menos */
  }
`;

export const FormTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin: 0 0 1em 0;
`;

export const FormSubtitle = styled.p`
  font-size: 1.2rem;
  align-self: flex-start;
`;

export const ButtonSubmitStyled = styled.button`
  background: #ff9900;
  margin: 0 auto;
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 8px;
  color: black;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin: 0 auto;

  &:hover {
    background: #2f298f;
    transition: all 0.3s ease-in-out;
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid;
  border-color: ${({ error }) => (error ? "var(--error)" : "var(--white)")};
  border-radius: 5px;
  flex-wrap: wxrap;
  width: 100%;
  height: 150px;
  resize: none;
  background: transparent;
  color: var(--white);
  outline: none;
`;

export const ErrorStyled = styled.span`
  padding-left: 5px;
  color: var(--error);
`;

export const InputBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
`;
export const InputLabelStyled = styled.label`
  font-size: 1rem;
  display: flex;
`;

// ------------------------------------------
// INPUT STYLES

export const BoxInputSt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
`;

export const LabelSt = styled.label`
  font-size: 1rem;
  display: flex;
`;

export const InputSt = styled.input`
  border: 1px solid;
  border-color: ${({ error }) => (error ? "var(--error)" : "var(--white)")};
  border-radius: 5px;
  padding: 10px;
  background: transparent;
  color: var(--white);
  outline: none;
`;

export const ErrorSt = styled.span`
  padding-left: 5px;
  color: red;
  font-size: 10px;
`;
