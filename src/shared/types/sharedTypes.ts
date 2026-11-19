export interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  open: boolean;
  title: string;
}