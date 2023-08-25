import { Col, Row } from "react-bootstrap";
import Items from "../components/cart/items"
import Total from "../components/cart/total";
import Topbar from "../components/topbar/topbar"

const CartPage = () => {
  return (
    <>
      <Topbar/>
      <Row>
        <Col md={7}>
          <Items/>
        </Col>
        <Col md={5}>
          <Total/>
        </Col>
      </Row>
    </>
  )
}

export default CartPage;