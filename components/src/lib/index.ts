import BaseModal from './Modal';
import ModalContent from './components/content/ModalContent';
import ModalFooter from './components/footer/ModalFooter';
import ModalHeader from './components/header/ModalHeader';

export const Modal = Object.assign(BaseModal, {
  Header: ModalHeader,
  Content: ModalContent,
  Footer: ModalFooter,
});
