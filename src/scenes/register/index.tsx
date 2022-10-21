import React from 'react';
import Form from 'src/components/Form';
import { SceneContainer } from 'src/components/SceneContainer';
import { StyledText } from 'src/components/StyledText';
import { StyledView } from 'src/components/StyledView';
import Title from 'src/components/title';
import { genericStyles } from 'src/styles/generic.styles';
import { PaletteScale, TypographyScale } from 'src/styles/types';
import { strings } from './strings';
import { styles } from './styles';

const Register = () => {
  const inputs = ['Nombre de usuario', 'Email', 'Contraseña'];
  const buttons = [
    { text: 'Registrarme', type: 'normal' },
    { text: '¿Tienes una cuenta? \n Inicia sesion', type: 'alternate' },
  ];
  return (
    <SceneContainer>
      <Title />
      <Form inputs={inputs} buttons={buttons}></Form>
    </SceneContainer>
  );
};

export default Register;
