import React, {useState} from 'react'
import { Row, Col, NavDropdown, Modal } from 'react-bootstrap';
import { BsCart2 } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import '../../styles/topbar.css'
import SignIn from '../sign-in/sign-in';

const Topbar = () => {
  const [show, setShow] = useState<any>(false);

  return (
    <Row className='margin backgroundColor'>
      <Col md={3}>
      <div className='column'>
        <AiOutlineHome className='cursor-pointer' size={20} onClick={()=> {
          window.location.replace('/')
        }}/>
        <input placeholder='¿Qué estás buscando?' size={39}/>
      </div>
      </Col>
      <Col md={1}>
          <NavDropdown
            id="nav-dropdown-dark-example"
            className='ms-2'
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
      <Col md={{ span: 1, offset: 5 }}>
        <a className='topbar-decoration-text' href='/crear-cuenta'>Crear cuenta</a>
      </Col>
      <Col md={1}>
        <h6
        className='cursor-pointer sign-in-margin'
        onClick={()=>{
          setShow(true);
        }}>
          Iniciar sesión
        </h6>
        <SignIn show={show} setShow={setShow}/>
      </Col>
      {/* <Col md={1}>
        Mis compras
      </Col> */}
      <Col md={1}>
        <BsCart2 className='cart' size={22} onClick={()=> {
          window.location.replace('/carro')
        }}/>
      </Col>
    </Row>
  )
}

export default Topbar;