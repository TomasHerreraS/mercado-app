import {Modal, Form as rbForm, Row, Col, Button} from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import '../../styles/create-account.css';

interface initialValues {
  email: string,
  password: string,
}

const SignIn = ({show, setShow}: any) => {
  const handleClose = () => setShow(false);
  const initialValues: initialValues = { email: '', password: '' }

  return(
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='title-center'>Iniciar sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Formik
          initialValues={initialValues}
          onSubmit={(value)=>{
          if (value.email === '' || value.password === '') {
            Swal.fire({
              icon: 'error',
              title: 'Debe llenar todos los campos',
            })
          }
      console.log(value);
    }}>
      {({ errors, touched }) => (
        <Form>
          <Row>
            <Col className='mb-2' md={12}>
              <rbForm.Control as={Field} name='email' type='email' placeholder='Correo' autoComplete='off' />
              {errors.email && touched.email ? (
                <div className='text-color'>{errors.email}</div>
                ) : null}
            </Col>
            <Col className='mb-2' md={12}>
              <rbForm.Control as={Field} name='password' placeholder='Contraseña' autoComplete='off' />
              {errors.password && touched.password ? (
                <div className='text-color'>{errors.password}</div>
                ) : null}
            </Col>
            <Col className='mt-3 text-center' md={12}>
              <Button type='submit'>Iniciar sesión</Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default SignIn;