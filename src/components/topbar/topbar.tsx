import React, {useState} from 'react'
import { Row, Col, NavDropdown, Modal } from 'react-bootstrap';
import { BsCart2 } from 'react-icons/bs';
import '../../styles/topbar.css'
import SignIn from '../sign-in/sign-in';

const Topbar = () => {
  const [show, setShow] = useState<any>(false);

  return (
    <Row className='margin backgroundColor'>
      <Col md={1}>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title='Categoría'>
          <NavDropdown.Item
            href="">
            Limpieza
          </NavDropdown.Item>
          <NavDropdown.Item
            href="">
            Hogar
          </NavDropdown.Item>
          <NavDropdown.Item
            href="">
            Tecnología
          </NavDropdown.Item>
          <NavDropdown.Item
            href="">
            Electrodoméstico
          </NavDropdown.Item>
        </NavDropdown>
      </Col>
      <Col md={3}>
        <input placeholder='¿Qué estás buscando?' size={35}/>
      </Col>
      <Col md={{ span: 1, offset: 5 }}>
        <a className='topbar-decoration-text' href='/crear-cuenta'>Crear cuenta</a>
      </Col>
      <Col md={1}>
        <p
        className='sign-in-text-decoration'
        onClick={()=>{
          setShow(true);
        }}>
          Iniciar sesión
        </p>
        <SignIn show={show} setShow={setShow}/>
      </Col>
      {/* <Col md={1}>
        Mis compras
      </Col> */}
      <Col md={1}>
        <BsCart2 className='cart' size={22}/>
      </Col>
    </Row>
  )
}

export default Topbar;