import React from 'react';
import FormTurn from '../../components/FormContact/Form';
import InfoContact from '../../components/InfoContact/InfoContact';
import { Div } from './ContactStyles';
const Contact = () => {
  return (
    <Div> 
    <InfoContact/>
    <FormTurn/>
    </Div> 
  );
}

export default Contact;
