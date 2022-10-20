import { ParamListBase, useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { ALLOWED_INCOGNITO_SCREENS, Routes } from 'src/navigation/routes'
import { selectIsIncognito } from 'src/store/features/session/sessionSelectors'

interface OuterProps {
  route: Routes
  params?: ParamListBase
}

export const useNavigate = () => {
  const isIncognito = useSelector(selectIsIncognito)
  const navigation = useNavigation()

  const navigate = useCallback(
    (route: OuterProps['route'], params?: OuterProps['params']) => {
      let navigationAllowed = true

      if (isIncognito) {
        navigationAllowed = ALLOWED_INCOGNITO_SCREENS.some(
          (allowedRoute: Routes) => {
            return route?.includes(allowedRoute)
          },
        )
      }

      if (navigationAllowed) {
        navigation.navigate(route, params)
      } else {
        navigation.navigate(Routes.ForbiddenIncognitoAccess)
      }
    },
    [navigation, isIncognito],
  )
  return { navigate }
}
