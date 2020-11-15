import { useFormik } from 'formik'
import './App.css';
import * as yup from 'yup';


function App() {
  const formik = useFormik({
    initialValues:{
      name: '',
      cast: ''
    },
    onSubmit: values => {
      alert(JSON.stringify( values))
      console.log(values)
    },
   validationSchema: yup.object({
     name: yup.string()
     .required("Name field is necessary")
     .min(3,"name must have 3 characters atleast"),
     cast: yup.number()
     .required('abay likh cast')
     .max(10,'bus bhai')
   })
  })
  return (
    <div className="App">
    <form onSubmit={formik.handleSubmit}>
    <div> 
    Name
     <input type='text' name='name' 
     onChange={formik.handleChange} value={formik.values.name} />
     <div style={{color:'green'}}> {formik.errors.name} </div>
     </div>
     <div> 
     Cast
      <input type='number' name='cast' 
      onChange={formik.handleChange} value={formik.values.cast}/>
      </div>
      <div style={{color:'green'}}> {formik.errors.cast} </div>
      <input type='submit' value='submit' 
      />
      </form>
    </div>
  );
}

export default App;
