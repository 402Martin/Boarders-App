import React from 'react';
import { Text } from 'react-native';
import { StyledText } from '../StyledText';
import { StyledTouchable } from '../StyledTouchable';
import StyledTouchableAlternate from '../StyledTouchableAlternate';
import { styles } from './styles';
import { IButonSchema } from './types';

type Props = {
  button: IButonSchema;
  getValues: () => unknown;
  isValid: boolean;
};
const HandleButton = (props: Props) => {
  const { button, getValues, isValid } = props;
  return (
    <>
      {(button.type != 'alternate' && (
        <StyledTouchable
          hitSlop={{
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
          }}
          style={styles.formButton}
          disabled={!isValid}
          onPress={() => {
            button.isSubmit ? button.onClick(getValues()) : button.onClick();
          }}
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
            onPress={() => {
              button.isSubmit ? button.onClick(getValues()) : button.onClick();
            }}
            style={styles.formButton}
          >
            <Text style={styles.formButtonText}>{button.text}</Text>
          </StyledTouchableAlternate>
        ))}
    </>
  );
};

export default HandleButton;
