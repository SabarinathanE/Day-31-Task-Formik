import { Formik, Form,Field, ErrorMessage } from 'formik';
import { useContext } from "react";
import { LibraryContext } from "../Context/Library";

export default function AddAuthor() {
  const {details = [],setDetails = () => {},isEditing = '',setIsEditing = () => {},editindex = ''} = useContext(LibraryContext);

    return (

  <div>
    <Formik
        initialValues={{ Author: '',
        Bio: '',
        BirthYear: "",}}

      validate={values => {
        const errors = {};
        if (!values.Author) {
          errors.Author = 'Please enter the Auther Name';
        } else if(
          values.Author.length < 3
          ){
          errors.Author = 'Please give atleast 3 letters';
          }
        if (!values.Bio) {
            errors.Bio = 'Please enter the Bio';
          }
          else if(
            values.Bio.length < 10
            ){
            errors.Bio = 'Please write atleast 10 letters';
            }
          if (!values.BirthYear) {
            errors.BirthYear = 'Please enter the Year';
          } else if (
            values.BirthYear.toString().length != 4
            ){
            errors.BirthYear = 'Please Enter a Valid Year';
          }
        return errors;
      }}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          if(!isEditing){
            const newList = {
              id: details.length + 1,
              Author: values.Author,
              Bio: values.Bio,
              BirthYear: values.BirthYear
            }
            const CopyList = [...details]
            CopyList.push(newList)
            setDetails(CopyList)
            values.Author = ''; 
            values.Bio = ''; 
            values.BirthYear = ''; 
          }else{
            const EditedList = {
              id: details.length,
              Author: values.Author,
              Bio: values.Bio,
              BirthYear: values.BirthYear
            }
            const CopyEditedList = [...details]
            CopyEditedList[editindex] = (EditedList)
            setDetails(CopyEditedList)
            setIsEditing(false)
            values.Author = ''; 
            values.Bio = ''; 
            values.BirthYear = '';
          }
          setSubmitting(false);
        }, 400);
      }}
      
    >
      {({ values,
         handleChange,
         handleBlur,
         isSubmitting, }) => (
          
        <Form className='Edit-data'>
          <div>
          <Field type="text" name="Author" placeholder="Auther Name" onChange={handleChange} onBlur={handleBlur} className="input input-bordered m-2 mb-3 max-w-xs sm:m-0" value={values.Author}  /><br />
          <ErrorMessage name="Author" component="div" />
          <Field type="text" name="Bio" placeholder="Bio" onChange={handleChange} onBlur={handleBlur} className="input input-bordered m-2 mb-3 max-w-xs sm:m-0" value={values.Bio} /><br />
          <ErrorMessage name="Bio" component="div" />
          <Field type="number" name="BirthYear" placeholder="Birth Year" onChange={handleChange} onBlur={handleBlur} className="input input-bordered m-2 mb-3 w-full max-w-xs sm:m-0" value={values.BirthYear} /><br />
          <ErrorMessage name="BirthYear" component="div" />

          <button to="/Authors" className="input input-handle m-2 w-full max-w-xs sm:m-0" type="submit" disabled={isSubmitting}>
            {isEditing ? "Update" : "Submit"}
          </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);   
}