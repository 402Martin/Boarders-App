import React from 'react';
import { Text } from 'react-native';
import { PaletteScale } from 'src/styles/types';
import Message from '../Message';
import { SceneContainer } from '../SceneContainer';
import { StyledText } from '../StyledText';
import { StyledTextInput } from '../StyledTextInput';
import { StyledTouchable } from '../StyledTouchable';
import StyledTouchableAlternate from '../StyledTouchableAlternate';
import { StyledView } from '../StyledView';
import { styles } from './styles';

const Form = () => {
  return (
    <SceneContainer style={styles.container}>
      <StyledView style={styles.form}>
        <StyledTextInput label="Nombre de usuario" style={styles.formChild}></StyledTextInput>
        <StyledTextInput label="Email" style={styles.formChild}></StyledTextInput>
        <StyledTextInput label="Contraseña" style={styles.formChild}></StyledTextInput>
        <StyledTouchable
          hitSlop={{
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
          }}
          style={styles.formButton}
        >
          <StyledText style={styles.formButtonText}>Registrarme</StyledText>
        </StyledTouchable>
        <StyledTouchableAlternate
          hitSlop={{
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
          }}
          style={styles.formButton}
        >
          <Text style={styles.formButtonText}>¿Tienes una cuenta? {'\n'} Inicia sesion</Text>
        </StyledTouchableAlternate>

        <Message message="Registro Extioso!" color={PaletteScale.SECONDARY_ACCENT_SUCCESS_GREEN50}></Message>
      </StyledView>
    </SceneContainer>
  );
};
export default Form;
