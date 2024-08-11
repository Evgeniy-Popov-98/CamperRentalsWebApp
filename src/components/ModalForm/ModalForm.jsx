import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast, Toaster } from 'react-hot-toast';

import css from './ModalForm.module.css';

const validationYupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('This field is required!'),
  email: Yup.string()
    .email('Must be a valid email!')
    .required('This field is required!'),
  date: Yup.date()
    .required('This field is required!')
    .min(
      new Date(2020, 0, 1),
      'The date cannot be earlier than January 1, 2020!'
    )
    .max(
      new Date(2030, 0, 1),
      'The date cannot be earlier than January 1, 2030!'
    ),

  message: Yup.string().min(3, 'Too short').max(256, 'Too long'),
});

const initialValues = {
  name: '',
  email: '',
  date: new Date().toISOString().split('T')[0],
  message: '',
};

const handleSubmit = (values, actions) => {
  toast.success('The sheet has been sent successfully!');
  console.log(values);
  actions.resetForm();
};

export const ModalForm = () => {
  return (
    <div className={css.modalContainer}>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#363636',
            color: '#fff',
          },
          error: { duration: 3500 },
        }}
      />
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
          <Field className={css.modalInput} type="date" name="date" />
          <ErrorMessage
            className={css.errorMessage}
            name="date"
            component="p"
          />
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
