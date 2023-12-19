import Header from './components/header';
import Head from 'next/head';
import { Form, Container, Button } from 'react-bootstrap';
import { useFormik } from "formik";
import {contentSchema} from "../schema/yupSchema";
import styles from "../styles/Home.module.css"
import { useDispatch } from 'react-redux';
import { blogDetails } from "../store/formSlice";

// Metadata for the page
export const metadata = {
  title: 'SparkScribe-creativity',
  description: "Embark on a journey to unlock your creative potential with our comprehensive guide on sparking innovative ideas. Discover practical tips, exercises, and insights that will inspire and guide you in fostering a more creative mindset. Whether you're an artist, entrepreneur, or simply looking to infuse more creativity into your daily life, this blog post is your gateway to a world of imagination and innovation.",
};

// Initial form values
const initialValues = {
  title: "",
  name: "",
  content: "",
};

function FormPage() {
  const dispatch = useDispatch();

  // Formik hook for form handling
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: contentSchema,
      onSubmit: (values, action) => {
        dispatch(blogDetails(values))
        action.resetForm();
      },
    });

  return (
    <>
      {/* Head component for setting metadata */}
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      
      {/* Header component */}
      <Header/>

      {/* Main container for the form */}
      <Container className={`d-flex justify-content-center align-items-center ${styles.Container}`} style={{ height: '100vh' ,background:"fixed"}} >
        {/* Form container */}
        <div style={{ maxWidth: '500px', width: '100%', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
          {/* Bootstrap form */}
          <Form style={{ padding: '20px' }} className={styles.form} onSubmit={handleSubmit}>
            {/* Form input for title */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{color:"black"}}>Title</Form.Label>
              <Form.Control 
                type="title" 
                placeholder="Title" 
                name='title'
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}/>
                {/* Display form error if present */}
                {errors.title && touched.title ? (
                  <p className={styles["form-error"]}>{errors.title}</p>
                ) : null}
            </Form.Group>

            {/* Form input for author name */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label style={{color:"black"}}>Name of Writer</Form.Label>
              <Form.Control 
                type="author" 
                placeholder="Name" 
                name='name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}/>
                {/* Display form error if present */}
                {errors.name && touched.name ? (
                  <p className={styles["form-error"]}>{errors.name}</p>
                ) : null}
            </Form.Group>

            {/* Form textarea for content */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label style={{color:"black"}}>Content</Form.Label>
              <Form.Control as="textarea" 
                type='content' 
                rows={3} 
                name='content' 
                value={values.content}
                onChange={handleChange}
                onBlur={handleBlur}/>
                {/* Display form error if present */}
                {errors.content && touched.content ? (
                  <p className={styles["form-error"]}>{errors.content}</p>
                ) : null}
            </Form.Group>

            {/* Form submission button */}
            <Button variant="primary" size="md" type='submit' active>
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default FormPage;
