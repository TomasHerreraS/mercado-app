import { Row, Col } from "react-bootstrap";
import CardOffers from "./card-offers";
import '../../styles/offers.css';

const Offers = () => {
  return (
    <div className="margin-offers">
      <Row>
        <Col md={1}>
          <h3>Ofertas</h3>
        </Col>
        <Col className="padding-more-offers">
          <a className="color-more-offers" href="/ofertas">Ver más</a>
        </Col>
      </Row>
      <CardOffers/>
    </div>
  )
}

export default Offers;