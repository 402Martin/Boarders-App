import { useContext, useMemo } from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { ThemeContext } from 'src/styles/Theme'
import { SpacingScale } from 'src/styles/types'

export interface InputTheme {
  focusedColor: string
  inputStyle: StyleProp<TextStyle>
  restingColor: string
  theme: { colors: { primary: string } }
  errorColor?: string
}

export const useInputColor = () => {
  const { Theme } = useContext(ThemeContext)
  const inputTheme: InputTheme = useMemo(
    () => ({
      errorColor: Theme.colors.SECONDARY_ACCENT_ERROR_RED50,
      focusedColor: Theme.colors.PRIMARY_FOURTH,
      inputStyle: {
        paddingHorizontal:
          Theme.spacing[SpacingScale.HORIZONTAL_SCREEN_PADDING],
      },
      restingColor: Theme.colors.PRIMARY_FOURTH,
      theme: {
        colors: {
          primary: Theme.colors.PRIMARY_FOURTH,
          text: Theme.colors.TEXT,
          placeholder: Theme.colors.PRIMARY_FOURTH,
          background: Theme.colors.THIRD_SURFACE_GREYSCALE10,
        },
      },
    }),
    [Theme],
  )
  return {
    inputTheme,
  }
}
