import { useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'

export const useGoBack = () => {
  const navigation = useNavigation()
  const goBack = useCallback(() => {
    const canGoBack = navigation.canGoBack()
    if (canGoBack) {
      navigation.goBack()
    }
  }, [navigation])
  return {
    goBack,
  }
}
