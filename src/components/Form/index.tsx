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

type Props = {
  inputs?: string[];
  buttons?: { text: string; type: string }[];
};
const Form: React.FC<Props> = (props) => {
  const { inputs, buttons } = props;
  return (
    <SceneContainer style={styles.container}>
      <StyledView style={styles.form}>
        <>
          {inputs?.map((input) => (
            <StyledTextInput label={input} style={styles.formChild}></StyledTextInput>
          ))}
          {buttons?.map(
            (button) =>
              (button.type != 'alternate' && (
                <StyledTouchable
                  hitSlop={{
                    top: 10,
                    bottom: 10,
                    left: 10,
                    right: 10,
                  }}
                  style={styles.formButton}
                >
                  <StyledText style={styles.formButtonText}>{button.text}</StyledText>
                </StyledTouchable>
              )) ||
              (button.type === 'alternate' && (
                <StyledTouchableAlternate
                  hitSlop={{
                    top: 10,
                    bottom: 10,
                    left: 10,
                    right: 10,
                  }}
                  style={styles.formButton}
                >
                  <Text style={styles.formButtonText}>{button.text}</Text>
                </StyledTouchableAlternate>
              )),
          )}

          <Message
            message="Registro Extioso!"
            color={PaletteScale.SECONDARY_ACCENT_SUCCESS_GREEN50}
          ></Message>
        </>
      </StyledView>
    </SceneContainer>
  );
};
export default Form;
