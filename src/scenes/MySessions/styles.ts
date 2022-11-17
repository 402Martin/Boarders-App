import { normalize } from 'path';
import { StyleSheet } from 'react-native';
import { genericStyles } from 'src/styles/generic.styles';
import { normalizedFontSize } from 'src/styles/scale';
import { Typography } from 'src/styles/Typography';

export const styles = StyleSheet.create({
  container: {
    ...genericStyles.transparent,
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    marginTop: '7%',
    overflow: 'hidden',
  },
  table: {
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 10,
  },
  row: {
    ...genericStyles.transparent,
    width: '100%',
    padding: 0,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  evenRow: {
    borderTopColor: '#808080',
    borderTopStyle: 'solid',
    borderTopWidth: 0.5,
    borderBottomColor: '#808080',
    borderBottomStyle: 'solid',
    borderBottomWidth: 0.5,
  },
  rowHeader: {
    ...genericStyles.transparent,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    width: '100%',
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  rowHeaderButton: {
    TextTransform: 'uppercase',
    borderRadius: 15,
    width: '60%',
  },

  inputButtons: {
    TextTransform: 'uppercase',
    width: '45%',
    marginTop: 10,
  },
  rowHeaderButtonText: {
    ...Typography.BUTTON,
    fontWeight: '600',
    fontSize: normalizedFontSize(2),
  },

  rowHeaderAdditionalInfo: {
    ...genericStyles.transparent,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5,
  },

  rowInputs: {
    ...genericStyles.transparent,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 5,
    flexWrap: 'wrap',
    marginTop: 0,
    marginBottom: 0,
  },
  rowHeaderAdditionalInfoText: {
    ...Typography.PARAGRAPH_REGULAR2,
    color: '#9e9e9e',
  },
  listTextContainer: {
    ...genericStyles.transparent,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  listText: {
    ...Typography.PARAGRAPH_BOLD2,
    selfAlign: 'center',
  },

  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 60,
    marginBottom: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    textAlign: 'center',
  },
  filterImg: {
    height: 25,
    width: 25,
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },

  evenFilter: {
    borderLeftColor: '#808080',
    borderLeftStyle: 'solid',
    borderLeftWidth: 0.5,
    borderRightColor: '#808080',
    borderRightStyle: 'solid',
    borderRightWidth: 0.5,
  },

  button: {
    marginTop: 10,
    marginBottom: 10,
  },
});
