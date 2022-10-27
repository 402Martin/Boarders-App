import React from 'react';
import { Image } from 'react-native';
import { StyledContainer } from 'src/components/StyledContainer';
import searchIcon from 'src/assets/icons/searchIcon.png';
import { styles } from './styles';

const filters = () => {
  return (
    <StyledContainer style={styles.filters}>
      <StyledContainer>
        <Image style={styles.filterImg} source={searchIcon} />
      </StyledContainer>
      <StyledContainer>
        <Image style={styles.filterImg} source={searchIcon} />
      </StyledContainer>
      <StyledContainer>
        <Image style={styles.filterImg} source={searchIcon} />
      </StyledContainer>
      <StyledContainer>
        <Image style={styles.filterImg} source={searchIcon} />
      </StyledContainer>
    </StyledContainer>
  );
};

export default filters;
