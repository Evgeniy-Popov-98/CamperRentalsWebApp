import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from './ModalForm.module.css';

const validationYupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('This field is required!'),
  email: Yup.string()
    .email('Must be a valid email!')
    .required('This field is required!'),
  //   data: Yup.string
  message: Yup.string().min(3, 'Too short').max(256, 'Too long'),
});

const initialValues = {
  name: '',
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
        validationSchema={validationYupSchema}
        onSubmit={handleSubmit}
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
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="p"
          />
          <Field
            className={css.modalInput}
            type="text"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="email"
            component="p"
          />
          {/* <Field
            className={css.modalInput}
            type="date"
            name="date"
            placeholder="Booking date"
            min="2024-08-01"
            max="2030-12-31"
            required
          /> */}
          <Field
            className={css.modalTextArea}
            as="textarea"
            name="message"
            placeholder="Comment"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="message"
            component="p"
          />
          <button className={css.modalFormBtn} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};
