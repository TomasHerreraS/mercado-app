import { Row, Col } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';
import '../../styles/topbar.css'

const FalseTopbar = () => {

  return (
    <Row className='margin false-background'>
      <Col md={1}>
        <BsArrowLeft className='back-arrow' size={22} onClick={()=>{
          window.location.replace('/')
        }}/>
      </Col>
    </Row>
  )
}

export default FalseTopbar;