import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Header from './components/header';

function contact() {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short, minimum 3 characters.')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short, minimum 4 characters.')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    text: Yup.string().min(10, 'Too Short, minimum 10 characters.'),
  });

  return (
    <div className='contactPage'>
      <Header />

      <h1 className='h1Contact'>Signup</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          text: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              className='contactForm'
              name='firstName'
              placeholder='Firstname'
            />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field
              className='contactForm'
              name='lastName'
              placeholder='Lastname'
            />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field
              className='contactForm'
              name='email'
              type='email'
              placeholder='Email'
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}

            <Field
              className='contactForm'
              name='color'
              as='select'
              placeholder='Textfield'
            >
              <option value='hr'>HR</option>
              <option value='important'>Important</option>
              <option value='sallary'>Sallary</option>
            </Field>

            <Field
              placeholder='Message'
              className='contactForm'
              as='textarea'
              name='text'
            ></Field>
            {errors.text && touched.text ? <div>{errors.text}</div> : null}
            <button className='submitButton' type='submit'>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default contact;
