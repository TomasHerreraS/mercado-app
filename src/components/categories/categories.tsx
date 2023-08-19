import { useState } from 'react';
import { Row, Col, NavDropdown } from "react-bootstrap";
import MainImageCategories from "./categories-main-image";
import CategoriesImage from "./categories-image";
import '../../styles/categories.css';

const Categories = () => {
  const [changeDropDown, setChangeDropDown] = useState<string>('Limpieza');

  return (
    <div className="margin-categories">
      <Row>
        <Col md={2}>
          <h3>Categoría</h3>
        </Col>
        <Col md={1} className="padding-dropdown-categories">
          <NavDropdown
            id="nav-dropdown-dark-example"
            title={changeDropDown}>
            <NavDropdown.Item
              id={changeDropDown === 'Limpieza' ? 'picked' : 'cleaning'}
              onClick={() => setChangeDropDown('Limpieza')} href="">
              Limpieza
            </NavDropdown.Item>
            <NavDropdown.Item
              id={changeDropDown === 'Hogar' ? 'picked' : 'home'}
              onClick={() => setChangeDropDown('Hogar')} href="">
              Hogar
            </NavDropdown.Item>
            <NavDropdown.Item
              id={changeDropDown === 'Tecnología' ? 'picked' : 'technology'}
              onClick={() => setChangeDropDown('Tecnología')} href="">
              Tecnología
            </NavDropdown.Item>
            <NavDropdown.Item
              id={changeDropDown === 'Electrodoméstico' ? 'picked' : 'homeappliances'}
              onClick={() => setChangeDropDown('Electrodoméstico')} href="">
              Electrodoméstico
            </NavDropdown.Item>
          </NavDropdown>
        </Col>
      </Row>
      <Row>
        <Col md={5}>
          <MainImageCategories/>
        </Col>
        <Col md={7}>
          <CategoriesImage/>
        </Col>
      </Row>
    </div>
  )
}

export default Categories;