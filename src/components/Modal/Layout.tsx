import React from 'react';
import Modal from 'react-native-modal';
import { PaletteScale, TypographyScale } from 'src/styles/types';
import { Button } from '../Button';

import { StyledText } from '../StyledText';
import { StyledView } from '../StyledView';
import { strings } from './strings';
import { styles } from './styles';
import { LayoutProps } from './types';

export const Layout: React.FunctionComponent<LayoutProps> = ({
  showModal,
  message,
  title,
  onConfirmAction,
  onConfirmButtonText,
  onCancelAction,
  cancelButtonText,
  height,
  confirmButtonDisabled,
  cancelButtonDisabled,
}) => (
  <Modal isVisible={showModal} style={styles.modal}>
    <StyledView
      style={[
        styles.card,
        {
          height: height,
        },
      ]}
    >
      <StyledView style={styles.mainContainer}>
        <StyledView style={styles.subContainer}>
          <StyledText
            typography={TypographyScale.HEADING_SEMI_BOLD3}
            color={PaletteScale.PRIMARY_FOURTH}
            style={styles.textAlign}
          >
            {title}
          </StyledText>
        </StyledView>
        {!!message && (
          <StyledView style={styles.messageContainer}>
            <StyledText
              typography={TypographyScale.BODY_REGULAR}
              color={PaletteScale.TEXT}
              style={styles.messageText}
            >
              {message}
            </StyledText>
          </StyledView>
        )}
        <StyledView style={styles.buttonContainer}>
          <Button
            title={onConfirmButtonText ? onConfirmButtonText : strings.ok}
            onPress={onConfirmAction}
            disabled={confirmButtonDisabled}
          />
          {!!cancelButtonText && (
            <Button title={cancelButtonText} onPress={onCancelAction} disabled={cancelButtonDisabled} />
          )}
        </StyledView>
      </StyledView>
    </StyledView>
  </Modal>
);
