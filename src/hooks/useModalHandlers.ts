import { useCallback, useState } from 'react'

export const useModalHandlers = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const toggleModal = useCallback(() => setShowModal(!showModal), [showModal])
  const hideModal = useCallback(() => setShowModal(false), [])
  const displayModal = useCallback(() => setShowModal(true), [])
  return {
    showModal,
    toggleModal,
    hideModal,
    displayModal,
  }
}
