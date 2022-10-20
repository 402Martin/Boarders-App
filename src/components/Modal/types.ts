export interface LayoutProps {
  showModal: boolean;
  title: string;
  message?: string;
  onConfirmAction: () => void;
  onCancelAction?: () => void;
  onConfirmButtonText?: string;
  cancelButtonText?: string;
  height?: number;
  confirmButtonDisabled?: boolean;
  cancelButtonDisabled?: boolean;
}
