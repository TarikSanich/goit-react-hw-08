import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import DeleteModal from '../DeleteModal/DeleteModal';
import EditModal from '../EditModal/EditModal';
import css from './Contact.module.css';

export default function Contact({ data: { id, name, number } }) {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const openEditModal = () => {
    setEditModal(true);
  };
  const closeEditModal = () => {
    setEditModal(false);
  };
  const openDeleteModal = () => {
    setDeleteModal(true);
  };
  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  return (
    <div className={css.contact}>
      <div className={css.container}>
        <div className={css.name}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={css.phone}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>

      <div className={css.buttonsGroupe}>
        <button className={css.button} onClick={openEditModal}>
          Edit
        </button>
        <button className={css.button} onClick={openDeleteModal}>
          Delete
        </button>
      </div>
      {editModal && (
        <EditModal
          isOpen={openEditModal}
          id={id}
          name={name}
          number={number}
          onClose={closeEditModal}
        />
      )}
      {deleteModal && (
        <DeleteModal
          isOpen={openDeleteModal}
          id={id}
          name={name}
          onClose={closeDeleteModal}
        />
      )}
    </div>
  );
}
