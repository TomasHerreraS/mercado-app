import { Row, Col } from "react-bootstrap";
import detergente from '../../assets/detergente-capsula-image-categories.png';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { FiTrash2 } from 'react-icons/fi'
import '../../styles/items.css';

const Items = () => {
  return (
    <div className="div-style div-margin">
      <p className="ps-2 pt-2">Productos</p>
      <hr/>
      <div>
        <Row>
          <Col md={1}>
            <img src={detergente} height={60} alt="detergente"/>
          </Col>
          <Col md={5}>
            <p className="center-vertically">Detergente en polvo para lavar ropa</p>
          </Col>
          <Col md={2}>
            <div className="div-col center-vertically">
              <AiOutlineMinus className='ms-1 pointer'/>
              <h6>1</h6>
              <AiOutlinePlus className='pointer'/>
            </div>
          </Col>
          <Col md={{ span: 2, offset: 1 }}>
            <p className="center-vertically">$ 30.501</p>
          </Col>
          <Col md={1}>
            <FiTrash2 className="center-vertically-trash" size={18}/>
          </Col>
        </Row>
      </div>
      <hr/>
      <Row>
        <Col md={10}>
          <p className="ps-2">Envío</p>
        </Col>
        <Col md={2}>
          <p>Gratis (o no)</p>
        </Col>
      </Row>
    </div>
  )
}

export default Items;