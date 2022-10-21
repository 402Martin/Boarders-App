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
  return (
    <SceneContainer>
      <Title />
      <Form></Form>
    </SceneContainer>
  );
};

export default Register;
