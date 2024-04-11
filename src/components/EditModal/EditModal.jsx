import Modal from 'react-modal';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import css from './EditModal.module.css';
import { useDispatch } from 'react-redux';
import { editContact } from '../../redux/contacts/operations';

Modal.setAppElement('#root');

export default function EditModal({ id, name, number, isOpen, onClose }) {
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const initialValues = {
    name: name,
    number: number,
  };

  const nameFieldId = nanoid();
  const numberFieldId = nanoid();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      editContact({
        id: id,
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
    onClose();
  };

  return (
    <Modal
      className={css.overlay}
      isOpen={isOpen}
      onRequestClose={onClose}
      onClick={onClose}
      closeModal
    >
      <div className={css.content}>
        <h3>Edit contact {name}</h3>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={ContactSchema}
        >
          <Form className={css.form}>
            <div className={css.field}>
              <label htmlFor={nameFieldId}>Name</label>
              <Field type="text" name="name" id={nameFieldId} />
              <ErrorMessage
                className={css.error}
                name="name"
                component="span"
              />
            </div>

            <div className={css.field}>
              <label htmlFor={numberFieldId}>Number</label>
              <Field type="text" name="number" id={numberFieldId} />
              <ErrorMessage
                className={css.error}
                name="number"
                component="span"
              />
            </div>

            <div className={css.buttonGroup}>
              <button className={css.button} onClick={onClose}>
                Cancel
              </button>
              <button className={css.button} type="submit">
                Save
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
}
