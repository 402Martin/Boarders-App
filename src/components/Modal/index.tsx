import React from 'react';

import { Layout } from './Layout';
import { LayoutProps } from './types';

export const Modal: React.FC<LayoutProps> = ({
  showModal,
  title,
  message,
  onConfirmAction,
  onConfirmButtonText,
  onCancelAction,
  cancelButtonText,
  height,
  confirmButtonDisabled = false,
  cancelButtonDisabled = false,
}) => {
  return (
    <Layout
      showModal={showModal}
      message={message}
      title={title}
      onConfirmAction={onConfirmAction}
      onConfirmButtonText={onConfirmButtonText}
      onCancelAction={onCancelAction}
      cancelButtonText={cancelButtonText}
      height={height}
      confirmButtonDisabled={confirmButtonDisabled}
      cancelButtonDisabled={cancelButtonDisabled}
    />
  );
};
