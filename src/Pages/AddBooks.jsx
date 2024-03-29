import { Formik, Form,Field, ErrorMessage } from 'formik';
import { useContext } from "react";
import { LibraryContext } from "../Context/Library";

export default function AddBooks() {

  const {bookdetails = [],setBookDetails = () => {},isBookEditing = '',setIsBookEditing = () => {},editBookindex = ''} = useContext(LibraryContext);

    return (

  <div>
    <Formik
        initialValues={{ Title: '',
        Author: '',
        ISBN: '',
        Published: '',}}

      validate={values => {
        const errors = {};
        if (!values.Title) {
          errors.Title = 'Please enter the Book Name';
          console.log(values.Title)
        } else if(
          values.Title.length < 4
          ){
          errors.Title = 'Please give atleast 4 letters';
          }
        if (!values.Author) {
            errors.Author = 'Please enter the Author Name';
          } else if (
            !/^[A-Z]+$/i.test(values.Author)
          ) {
            errors.Author = 'Please Enter a Valid Name';
          }else if(
            values.Author.length < 4
            ){
            errors.Author = 'Please give atleast 4 letters';
            }
          if (!values.ISBN) {
            errors.ISBN = 'Please enter ISBN Number';
          } 
          if (!values.Published) {
            errors.Published = 'Please enter the Year';
          } else if (
            values.Published.toString().length != 4
            ){
            errors.Published = 'Please Enter a Valid Year';
          }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          if(!isBookEditing){
            const newList = {
              id: bookdetails.length + 1,
              Title: values.Title,
              Author: values.Author,
              ISBN: values.ISBN,
              Published: values.Published
            }
            const CopyList = [...bookdetails]
            CopyList.push(newList)
            setBookDetails(CopyList)
            values.Title = '';
            values.Author = ''; 
            values.ISBN = ''; 
            values.Published = ''; 
          }else{
            const EditedList = {
              id: bookdetails.length,
              Title: values.Title,
              Author: values.Author,
              ISBN: values.ISBN,
              Published: values.Published
            }
            const CopyEditedList = [...bookdetails]
            CopyEditedList[editBookindex] = (EditedList)
            setBookDetails(CopyEditedList)
            setIsBookEditing(false)
            values.Title = '';
            values.Author = ''; 
            values.ISBN = ''; 
            values.Published = '';
          }
          setSubmitting(false);
        }, 400);
      }}

    >
      {({values,
         handleChange,
         handleBlur,
         isSubmitting, }) => (
        <Form className='Edit-data'>
          <div>
          <Field type="text" name="Title" placeholder="Book Name" onChange={handleChange} onBlur={handleBlur} className="input input-bordered m-2 mb-3 max-w-xs sm:m-0" value={values.Title} /><br />
          <ErrorMessage name="Title" component="div" />
          <Field type="text" name="Author" placeholder="Author" onChange={handleChange} onBlur={handleBlur} className="input input-bordered m-2 mb-3 max-w-xs sm:m-0" value={values.Author} /><br />
          <ErrorMessage name="Author" component="div" />
          <Field type="number" name="ISBN" placeholder="ISBN Number" onChange={handleChange} onBlur={handleBlur} className="input input-bordered m-2 mb-3 w-full max-w-xs sm:m-0" value={values.ISBN} /><br />
          <ErrorMessage name="ISBN" component="div" />
          <Field type="number" name="Published" placeholder="Published Year" onChange={handleChange} onBlur={handleBlur} className="input input-bordered m-2 mb-3 w-full max-w-xs sm:m-0" value={values.Published} /><br />
          <ErrorMessage name="Published" component="div" />

          <button className="input input-handle m-2 w-full max-w-xs sm:m-0" type="submit" disabled={isSubmitting}>
          {isBookEditing ? "Update" : "Submit"}
          </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);   
}