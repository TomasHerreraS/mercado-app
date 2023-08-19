import { Row, Col, Card } from "react-bootstrap";
import coffee from '../../assets/coffee.png';
import Carousel from "react-multi-carousel";
import { AiOutlineHeart } from 'react-icons/ai';
import "react-multi-carousel/lib/styles.css";
import '../../styles/offers.css';

export const item = 5;
const CardOffers = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return(
    <Carousel
      className="card-offer-carousel-margin"
      draggable={false}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      responsive={responsive}>
      <Card className="margin-card-offers card-hover-shadow display-fav-card display-original-price-card"
        style={{ width: '13rem' }}>
        <AiOutlineHeart className="card-add-favorite-icon" size='20px'/>
        <Card.Img src={coffee} height='100%' />
        <Card.Body>
          <Card.Text>
            <Row>
              <Col md={12}>
                <p className="card-original-price">$ 35.430</p>
              </Col>
              <Col md={6}>
                <h5>$ 22.530</h5>
              </Col>
              <Col md={6}>
                <p className="card-discount-text">24% OFF</p>
              </Col>
            </Row>
            <p className="card-offers-interest-shipping-text">6x $ 5.912 sin interés</p>
            {/* TODO: Esto acá abajo dependerá del precio, si es mayor a 25k el envío es gratis */}
            <p className="card-offers-interest-shipping-text">Envío gratis</p>
            <p className="card-offers-text">Café nescafé Tradición 400g x4</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="margin-card-offers card-hover-shadow display-fav-card display-original-price-card"
        style={{ width: '13rem' }}>
        <AiOutlineHeart className="card-add-favorite-icon" size='20px'/>
        <Card.Img src={coffee} height='100%' />
        <Card.Body>
          <Card.Text>
            <Row>
              <Col md={12}>
                <p className="card-original-price">$ 35.430</p>
              </Col>
              <Col md={6}>
                <h5>$ 22.530</h5>
              </Col>
              <Col md={6}>
                <p className="card-discount-text">24% OFF</p>
              </Col>
            </Row>
            <p className="card-offers-interest-shipping-text">6x $ 5.912 sin interés</p>
            {/* TODO: Esto acá abajo dependerá del precio, si es mayor a 25k el envío es gratis */}
            <p className="card-offers-interest-shipping-text">Envío gratis</p>
            <p className="card-offers-text">Café nescafé Tradición 400g x4</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="margin-card-offers card-hover-shadow display-fav-card display-original-price-card"
        style={{ width: '13rem' }}>
        <AiOutlineHeart className="card-add-favorite-icon" size='20px'/>
        <Card.Img src={coffee} height='100%' />
        <Card.Body>
          <Card.Text>
            <Row>
              <Col md={12}>
                <p className="card-original-price">$ 35.430</p>
              </Col>
              <Col md={6}>
                <h5>$ 22.530</h5>
              </Col>
              <Col md={6}>
                <p className="card-discount-text">24% OFF</p>
              </Col>
            </Row>
            <p className="card-offers-interest-shipping-text">6x $ 5.912 sin interés</p>
            {/* TODO: Esto acá abajo dependerá del precio, si es mayor a 25k el envío es gratis */}
            <p className="card-offers-interest-shipping-text">Envío gratis</p>
            <p className="card-offers-text">Café nescafé Tradición 400g x4</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="margin-card-offers card-hover-shadow display-fav-card display-original-price-card"
        style={{ width: '13rem' }}>
        <AiOutlineHeart className="card-add-favorite-icon" size='20px'/>
        <Card.Img src={coffee} height='100%' />
        <Card.Body>
          <Card.Text>
            <Row>
              <Col md={12}>
                <p className="card-original-price">$ 35.430</p>
              </Col>
              <Col md={6}>
                <h5>$ 22.530</h5>
              </Col>
              <Col md={6}>
                <p className="card-discount-text">24% OFF</p>
              </Col>
            </Row>
            <p className="card-offers-interest-shipping-text">6x $ 5.912 sin interés</p>
            {/* TODO: Esto acá abajo dependerá del precio, si es mayor a 25k el envío es gratis */}
            <p className="card-offers-interest-shipping-text">Envío gratis</p>
            <p className="card-offers-text">Café nescafé Tradición 400g x4</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="margin-card-offers card-hover-shadow display-fav-card display-original-price-card"
        style={{ width: '13rem' }}>
        <AiOutlineHeart className="card-add-favorite-icon" size='20px'/>
        <Card.Img src={coffee} height='100%' />
        <Card.Body>
          <Card.Text>
            <Row>
              <Col md={12}>
                <p className="card-original-price">$ 35.430</p>
              </Col>
              <Col md={6}>
                <h5>$ 22.530</h5>
              </Col>
              <Col md={6}>
                <p className="card-discount-text">24% OFF</p>
              </Col>
            </Row>
            <p className="card-offers-interest-shipping-text">6x $ 5.912 sin interés</p>
            {/* TODO: Esto acá abajo dependerá del precio, si es mayor a 25k el envío es gratis */}
            <p className="card-offers-interest-shipping-text">Envío gratis</p>
            <p className="card-offers-text">Café nescafé Tradición 400g x4</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="margin-card-offers card-hover-shadow display-fav-card display-original-price-card"
        style={{ width: '13rem' }}>
        <AiOutlineHeart className="card-add-favorite-icon" size='20px'/>
        <Card.Img src={coffee} height='100%' />
        <Card.Body>
          <Card.Text>
            <Row>
              <Col md={12}>
                <p className="card-original-price">$ 35.430</p>
              </Col>
              <Col md={6}>
                <h5>$ 22.530</h5>
              </Col>
              <Col md={6}>
                <p className="card-discount-text">24% OFF</p>
              </Col>
            </Row>
            <p className="card-offers-interest-shipping-text">6x $ 5.912 sin interés</p>
            {/* TODO: Esto acá abajo dependerá del precio, si es mayor a 25k el envío es gratis */}
            <p className="card-offers-interest-shipping-text">Envío gratis</p>
            <p className="card-offers-text">Café nescafé Tradición 400g x4</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="margin-card-offers card-hover-shadow display-fav-card display-original-price-card"
        style={{ width: '13rem' }}>
        <AiOutlineHeart className="card-add-favorite-icon" size='20px'/>
        <Card.Img src={coffee} height='100%' />
        <Card.Body>
          <Card.Text>
            <Row>
              <Col md={12}>
                <p className="card-original-price">$ 35.430</p>
              </Col>
              <Col md={6}>
                <h5>$ 22.530</h5>
              </Col>
              <Col md={6}>
                <p className="card-discount-text">24% OFF</p>
              </Col>
            </Row>
            <p className="card-offers-interest-shipping-text">6x $ 5.912 sin interés</p>
            {/* TODO: Esto acá abajo dependerá del precio, si es mayor a 25k el envío es gratis */}
            <p className="card-offers-interest-shipping-text">Envío gratis</p>
            <p className="card-offers-text">Café nescafé Tradición 400g x4</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Carousel>
  )
}

export default CardOffers;