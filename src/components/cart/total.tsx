import { Row, Col, Button } from "react-bootstrap";
import '../../styles/total.css';

const Total = () => {
  return (
    <div className="div-style div-margin-total">
      <h5 className="pt-2 ms-3">Resumen de compra</h5>
      <hr/>
      <Row className="">
        <Col>
          <p className="ms-3">Productos (1)</p>
        </Col>
        <Col>
          <p className="ms-3">$ 53.230</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="ms-3">Envíos</p>
        </Col>
        <Col>
          <p className="ms-3">Gratis</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5 className="ms-3">Total</h5>
        </Col>
        <Col>
          <h5 className="ms-3">$ 53.230</h5>
        </Col>
      </Row>
        <Button className="my-2 ms-2">Continuar compra</Button>
    </div>
  )
}

export default Total;