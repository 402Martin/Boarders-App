import { get } from 'lodash';
import React from 'react';
import { FlatList } from 'react-native';
import { Theme } from 'src/styles/Theme';

import { StyledView } from '../StyledView';
import { CheckBoxInput } from './CheckBoxInput';
import { styles } from './styles';
import { CheckBoxGroupProps } from './types';

export const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({
  data,
  updater,
  selectedComparer,
  isMultiple,
  style,
}) => (
  <StyledView style={[styles.checkBoxGroupContainer, style]}>
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: Theme.colors.TRANSPARENT }}
      ItemSeparatorComponent={() => (
        <StyledView
          style={{
            backgroundColor: Theme.colors.TRANSPARENT,
            height: 8,
          }}
        />
      )}
      renderItem={({ item }) => (
        <CheckBoxInput
          onPress={updater(item)}
          text={item}
          isMultiple={isMultiple}
          selected={isMultiple ? selectedComparer.indexOf(item) !== -1 : selectedComparer === item}
        />
      )}
    />
  </StyledView>
);
