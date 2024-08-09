import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from './ModalForm.module.css';

const validationYupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Is required'),
  email: Yup.string().email('Must be a valid email!').required('Required'),
  //   data: Yup.string
  message: Yup.string().min(3, 'Too short').max(256, 'Too long'),
});

const initialValues = {
  username: '',
  email: '',
  message: '',
};

const handleSubmit = (values, actions) => {
  console.log(values);
  actions.resetForm();
};

export const ModalForm = () => {
  return (
    <div className={css.modalContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationYupSchema}
      >
        <Form>
          <h2 className={css.modalFormTitle}>Book your campervan now</h2>
          <p className={css.modalFormSubTitle}>
            Stay connected! We are always ready to help you.
          </p>
          <Field
            className={css.modalInput}
            type="text"
            name="name"
            placeholder="Name"
          />
          <ErrorMessage component="p" name="name" />
          <Field
            className={css.modalInput}
            type="text"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage component="p" name="email" />
          <Field
            className={css.modalInput}
            type="date"
            name="date"
            placeholder="Booking date"
            min="2024-08-01"
            max="2030-12-31"
            required
          />
          <Field
            className={css.modalTextArea}
            as="textarea"
            name="message"
            placeholder="Comment"
          />
          <ErrorMessage component="p" name="message" />
          <button className={css.modalFormBtn} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};
