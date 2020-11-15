import React from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import * as yup from 'yup'

function FormikWithContext() {
  return (
    <Formik initialValues= {{ myname: '', fatherName: '', message: ''}}
    onSubmit= {(values) => {console.log(values)}}
    validationSchema={yup.object({
        myname: yup.string().max(10,'Max chars is 10').required('req'),
        fatherName: yup.string().required('It is lazim'),
        message: yup.string().required('Also Reqd')
    })}>

    <Form>
       
        <div>
        <label htmlFor='name' >My Name </label>
        <Field type='text' id='myname' name='myname' />
       <ErrorMessage name='myname' />
        </div>

        <div>
        <label htmlFor='fName'> Father Name </label>
        <Field type='text' id='fName' name='fatherName'/>
        <ErrorMessage name='fatherName' />
        </div>

        <Field name="message" as="textarea"  
        className="form-textarea"/>
        <ErrorMessage name='message' />

        <button type='submit'  >Submit </button>
       
        </Form>
    </Formik>
  )
}

export default FormikWithContext
