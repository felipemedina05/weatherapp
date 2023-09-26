

// Then add additional custom code here
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from '../Nav/Nav';
import "./Modal.css";

function Modal({handleclik,handlesubmit}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <> 
      <Button variant="secondary" onClick={handleShow}>
        Set Location
      </Button>

      <Offcanvas  show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton >
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav handleclik={handleclik} handlesubmit={handlesubmit}></Nav>
        </Offcanvas.Body>
      </Offcanvas>
      
      </>
  );
}

export default Modal;