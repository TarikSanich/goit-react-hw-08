import Modal from 'react-modal';
import css from './DeleteModal.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

Modal.setAppElement('#root');

export default function DeleteModal({ id, name, isOpen, onClose }) {
  const dispatch = useDispatch();

  return (
    <Modal
      className={css.overlay}
      isOpen={isOpen}
      onClick={onClose}
      onRequestClose={onClose}
      closeModal={onClose}
    >
      <div className={css.content}>
        <h3>Delete contact {name}?</h3>
        <div className={css.buttonGroup}>
          <button className={css.button} onClick={onClose}>
            No
          </button>
          <button
            className={css.button}
            onClick={() => dispatch(deleteContact(id))}
          >
            Yes
          </button>
        </div>
      </div>
    </Modal>
  );
}
