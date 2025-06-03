import React from 'react'
import {Container, Nav, Navbar, Offcanvas} from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CustomNavbar = () => {

    const [show, setShow] = useState(false)

    const handleClose =() => setShow(false)
    const handleShow = () => setShow(true)

  return (
    <>
    <Navbar expand="md" style={{ backgroundColor: '#002F6C'}} variant="dark" classname="px-3 shadoow-sm">
        <Container fluid>
            <Navbar.Brand as={Link} to="/" classname="d-flex align-items-center">
                <img src="/uniesp.jpg" alt= "Uniesp Logo" width={60} heigt={60} className='=me-2 rouded'/>
                

            </Navbar.Brand>
            {/* Botão hamburguer visivel apenas as telas pequenas*/}
            <Navbar.Toggle onClick={handleShow}/>
              <Navbar.Collapse className="justify-content-end d-md-flex">
                <Nav>
                  <Nav.Link as={Link} to="/a-faculdade" className="px-3">A Faculdade</Nav.Link>
                  <Nav.Link as={Link} to="/dpo-lgpd" className="px-3">DPO LGPD</Nav.Link>
                  <Nav.Link as={Link} to="/noticias" className="px-3">Noticias</Nav.Link>
                  <Nav.Link as={Link} to="/admin-noticias" className="px-3">Admin</Nav.Link>
                </Nav>

              </Navbar.Collapse>
  
        </Container> 

    </Navbar>

    {/* Menu lateral (offcanvas) vísivel em telas pequenas ao clcar no botão hamburguer*/}

    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <Nav className="flex-column">
        {/* Cada item do menu fecha o offcanvas ao ser clicado*/ }
        
      <Nav.Link as={Link} to="/a-faculdade" onClick={handleClose}>A Faculdade</Nav.Link>
              <Nav.Link as={Link} to="/dpo-lgpd"onClick={handleClose}>DPO LGPD</Nav.Link>
              <Nav.Link as={Link} to="/noticias"onClick={handleClose}>Noticias</Nav.Link>
              <Nav.Link as={Link} to="/admin-noticias"onClick={handleClose}>Admin</Nav.Link>
      </Nav>
    </Offcanvas.Body>

    </Offcanvas>

    </>
  )
}

export default CustomNavbar