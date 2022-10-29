import { TextStyle } from 'react-native';

import { normalizedFontSize } from './scale';
import { TypographyScale, TypographyStyle } from './types';

export const Typography: TypographyStyle<TextStyle> = {
  [TypographyScale.HEADING_BOLD1]: {
    fontFamily: 'Nunito-Bold',
    // Design reference: `fontSize: 28`
    fontSize: normalizedFontSize(6.3),
    fontWeight: '700',
  },
  [TypographyScale.HEADING_BOLD2]: {
    fontFamily: 'Nunito-Bold',
    // Design reference: `fontSize: 22`
    fontSize: normalizedFontSize(2.6),
    fontWeight: '700',
  },
  [TypographyScale.HEADING_SEMI_BOLD3]: {
    fontFamily: 'Nunito-SemiBold',
    // Design reference: `fontSize: 20`
    fontSize: normalizedFontSize(2.35),
    fontWeight: '600',
  },
  [TypographyScale.PARAGRAPH_REGULAR1]: {
    fontFamily: 'Nunito-Regular',
    // Design reference: `fontSize: 18`
    fontSize: normalizedFontSize(2.15),
    fontWeight: '400',
  },
  [TypographyScale.PARAGRAPH_REGULAR2]: {
    fontFamily: 'Nunito-Regular',
    // Design reference: `fontSize: 16`
    fontSize: normalizedFontSize(2.2),
    fontWeight: '400',
  },
  [TypographyScale.PARAGRAPH_BOLD2]: {
    fontFamily: 'Nunito-Bold',
    // Design reference: `fontSize: 16`
    fontSize: normalizedFontSize(1.9),
    fontWeight: '600',
  },
  [TypographyScale.BODY_BOLD]: {
    fontFamily: 'Nunito-Bold',
    // Design reference: `fontSize: 12`
    fontSize: normalizedFontSize(1.45),
    fontWeight: '700',
  },
  [TypographyScale.BODY_REGULAR]: {
    fontFamily: 'Nunito-Regular',
    // Design reference: `fontSize: 12`
    fontSize: normalizedFontSize(1.65),
    fontWeight: '400',
  },
  [TypographyScale.LINK_REGULAR]: {
    fontFamily: 'Nunito-Regular',
    // Design reference: `fontSize: 14`
    fontSize: normalizedFontSize(4.25),
    fontWeight: '400',
  },
  [TypographyScale.ACTION_REGULAR]: {
    fontFamily: 'Nunito-Regular',
    // Design reference: `fontSize: 12`
    fontSize: normalizedFontSize(1.45),
    fontWeight: '600',
  },
  [TypographyScale.BUTTON]: {
    fontFamily: 'Nunito-Bold',
    // Design reference: `fontSize: 28`
    fontSize: normalizedFontSize(2.5),
    fontWeight: '700',
  },
};
