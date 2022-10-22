import React from 'react';
import { SceneContainer } from 'src/components/SceneContainer';
import { StyledText } from 'src/components/StyledText';
import { StyledView } from 'src/components/StyledView';
import { genericStyles } from 'src/styles/generic.styles';
import { PaletteScale, TypographyScale } from 'src/styles/types';
import { strings } from './strings';
import { styles } from './styles';

const Title = () => {
  return (
    <SceneContainer>
      <StyledView style={styles.scene}>
        <StyledText
          color={PaletteScale.PRIMARY_FIRST}
          typography={TypographyScale.HEADING_BOLD1}
          style={styles.title}
        >
          {strings.title}
        </StyledText>
      </StyledView>
    </SceneContainer>
  );
};

export default Title;
