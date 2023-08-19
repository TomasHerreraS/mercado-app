import { Formik, Form, Field } from 'formik';
import { Row, Col, Form as rbForm, Button, InputGroup } from 'react-bootstrap';
import Swal from 'sweetalert2';
import * as yup from 'yup';
import '../../styles/create-account.css';

interface initialValues {
  name: string,
  lastname: string,
  email: string,
  password: string,
  number: string,
  address: string
}

const FormCreateAccount = () => {
  const initialValues: initialValues = { name: '', lastname: '', email: '', password: '', number: '', address: '' }

  const validationSchema = yup.object({
    name: yup.string()
      .typeError('Debe ingresar solo letras')
      .matches(/^[a-zA-Z]+$/, "Solo se permiten letras")
      .min(3, 'El nombre es demasiado corto')
      .max(50, 'El nombre es demasiado largo'),
    lastname: yup.string()
      .typeError('Debe ingresar solo letras')
      .matches(/^[a-zA-Z]+$/, "Solo se permiten letras")
      .min(3, 'El apellido es demasiado corto')
      .max(50, 'El apellido es demasiado largo'),
    email: yup.string()
      .typeError('Debe ingresar solo letras')
      .min(13, 'El email es demasiado corto')
      .max(100, 'El email es demasiado largo'),
    password: yup.string()
      .typeError('Debe ingresar solo letras y números')
      .min(3, 'La contraseña es demasiado corto')
      .max(55, 'La contraseña es demasiado larga'),
    number: yup.string()
      .matches(/^\d+$/, 'Solo se permiten números')
      .min(8, 'Formato: (12345678)')
      .max(8, 'Formato: (12345678)'),
    address: yup.string()
      .typeError('Debe ingresar solo letras y números')
      .matches(/^[a-z0-9]+$/i, 'Solo se permiten letras y números')
      .min(3, 'La dirección es demasiado corto')
      .max(150, 'La dirección es demasiado larga'),
  })

  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(value)=>{
      if (value.name === '' || value.lastname === '' || value.email === '' || value.password === '' || value.number === '' ||
          value.address === '') {
            Swal.fire({
              icon: 'error',
              title: 'Debe llenar todos los campos',
              // text: 'Ese nombre de usuario ya existe en la base de datos...'
            })
          }
      console.log(value);
    }}>
      {({ errors, touched }) => (
        <Form>
          <Row>
            <Col className='mb-2' md={6}>
              <rbForm.Control as={Field} name='name' type='text' placeholder='Nombre' autoComplete='off' />
              {errors.name && touched.name ? (
                <div className='text-color'>{errors.name}</div>
                ) : null}
            </Col>
            <Col className='mb-2' md={6}>
              <rbForm.Control as={Field} name='lastname' type='text' placeholder='Apellido' autoComplete='off' />
              {errors.lastname && touched.lastname ? (
                <div className='text-color'>{errors.lastname}</div>
                ) : null}
            </Col>
            <Col className='mb-2' md={6}>
              <rbForm.Control as={Field} name='email' type='email' placeholder='Correo' autoComplete='off' />
              {errors.email && touched.email ? (
                <div className='text-color'>{errors.email}</div>
                ) : null}
            </Col>
            <Col className='mb-2' md={6}>
              <rbForm.Control as={Field} name='password' placeholder='Contraseña' autoComplete='off' />
              {errors.password && touched.password ? (
                <div className='text-color'>{errors.password}</div>
                ) : null}
            </Col>
            <Col className='mb-2' md={6}>
              <InputGroup>
              <InputGroup.Text id="basic-addon1">+56 9</InputGroup.Text>
              <rbForm.Control as={Field} name='number' type='text' placeholder='Celular' autoComplete='off' maxLength={8} />
              </InputGroup>
              {errors.number && touched.number ? (
                <div className='text-color'>{errors.number}</div>
                ) : null}
            </Col>
            <Col className='mb-2' md={6}>
              <rbForm.Control as={Field} name='address' type='text' placeholder='Dirección' autoComplete='off' />
              {errors.address && touched.address ? (
                <div className='text-color'>{errors.address}</div>
                ) : null}
            </Col>
            <Col className='mt-3' md={12}>
              <Button type='submit'>Crear cuenta</Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  )
}

export default FormCreateAccount;