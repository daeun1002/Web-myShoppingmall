import React from 'react'
import { Container, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';

const MainNav = () => {
  return (
    <div className="bordertb">
      <Container className="mainnav-box">
        <Row>
          <Col xs="10">
            <Nav className="mainnav-list">
              <NavItem>
                <a href="#" className="menu-close"><span class="material-icons">menu</span></a>
              </NavItem>
              <NavItem><NavLink href="#">상의</NavLink></NavItem>
              <NavItem><NavLink href="#">하의</NavLink></NavItem>
              <NavItem><NavLink href="#">아우터</NavLink></NavItem>
              <NavItem><NavLink href="#">원피스</NavLink></NavItem>
              <NavItem><NavLink href="#">치마</NavLink></NavItem>
              <NavItem><NavLink href="#">신발</NavLink></NavItem>
              <NavItem><NavLink href="#">가방</NavLink></NavItem>
              <NavItem><NavLink href="#">악세서리</NavLink></NavItem>
            </Nav>
          </Col>
          <Col xs="2"></Col>
        </Row>
      </Container>
    </div>
  )
}

export default MainNav