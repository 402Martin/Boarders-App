import { ParamListBase } from '@react-navigation/native'
import { useCallback } from 'react'
import { Routes } from 'src/navigation/Routes'

import { useNavigate } from './useNavigate'

interface OuterProps {
  route: Routes
  params?: ParamListBase
}

export const useNavigatesTo = () => {
  const { navigate } = useNavigate()

  const navigatesTo = useCallback(
    (route: OuterProps['route'], params?: OuterProps['params']) => () =>
      navigate(route, params),
    [navigate],
  )
  return { navigatesTo }
}
