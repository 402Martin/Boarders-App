import { useCallback } from 'react'
import { AdopterState } from 'src/store/features/adopter/types'
import { SessionState } from 'src/store/features/session/types'

type OuterProps = Pick<AdopterState, 'currentAdopter'> &
  Pick<SessionState, 'incognito'>

export const useIsProfileCompleted = (
  currentAdopter: OuterProps['currentAdopter'],
  incognito: OuterProps['incognito'],
) => {
  const isProfileCompleted = useCallback((): boolean => {
    return (
      incognito ||
      (currentAdopter?.city !== undefined && currentAdopter?.city !== null)
    )
  }, [currentAdopter, incognito])

  return {
    isProfileCompleted,
  }
}
