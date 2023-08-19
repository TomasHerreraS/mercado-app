import { Row, Col } from "react-bootstrap";
import detergente from '../../assets/detergente-capsula-image-categories.png';
import lavalozaGel from '../../assets/lavaloza-gel-image-categories.png';
import aromatizante from '../../assets/aromatizante-febreeze-image-categories.png';
import quix1500ml from '../../assets/quix1500ml-image-categories.png';
import quix5l from '../../assets/quix5L-image-categories.png';
import omo3l from '../../assets/omo3L-image-categories.png';
import rinso3l from '../../assets/rinso3L-image-categories.png';

const CategoriesImage = () => {
  return (
    <Row>
      <Col className="mb-3" md={3}>
        <img className="categories-product-hover-shadow" src={detergente} height='160' alt="Detergente en capsula"/>
      </Col>
      <Col className="mb-3" md={3}>
        <img className="categories-product-hover-shadow" src={lavalozaGel} height='160' alt="Lavaloza en gel"/>
      </Col>
      <Col className="mb-3" md={3}>
        <img className="categories-product-hover-shadow" src={aromatizante} height='160' alt="Aromatizante"/>
      </Col>
      <Col className="mb-3" md={3}>
        <img className="categories-product-hover-shadow" src={quix1500ml} height='160' alt="Quix de 1500ML"/>
      </Col>
      <Col className="mb-3" md={3}>
        <img className="categories-product-hover-shadow" src={quix5l} height='160' alt="Quix de 5 Litros"/>
      </Col>
      <Col className="mb-3" md={3}>
        <img className="categories-product-hover-shadow" src={detergente} height='160' alt="Detergente"/>
      </Col>
      <Col className="mb-3" md={3}>
        <img className="categories-product-hover-shadow" src={omo3l} height='160' alt="Omo 3 Litros"/>
      </Col>
      <Col className="mb-3" md={3}>
        <img className="categories-product-hover-shadow" src={rinso3l} height='160' alt="Rinso 3 Litros"/>
      </Col>
    </Row>
  )
}

export default CategoriesImage;