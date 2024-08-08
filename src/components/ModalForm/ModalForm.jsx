import { Formik, Form } from 'formik';

export const ModalForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <h2>Book your campervan now</h2>
        <p>Stay connected! We are always ready to help you.</p>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="week" placeholder="Booking date" />
        <textarea name="" id="" placeholder="Comment"></textarea>
        <button></button>
      </Form>
    </Formik>
  );
};
