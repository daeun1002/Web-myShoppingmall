import React from 'react'
import { Container, Row, Col, InputGroup, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const MiddleNav = () => {
  return (
  <Container className="middlenav">
    <Row>
      <Col xs="2">
        <a href="/" className="fs-50 lh-80">쇼핑몰</a>
      </Col>
      <Col xs="8">
        <InputGroup>
          <Dropdown toggle={function noRefCheck(){}}>
            <DropdownToggle>
              카테고리
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                상의
              </DropdownItem>
              <DropdownItem>
                하의
              </DropdownItem>
              <DropdownItem>
                아우터
              </DropdownItem>
              <DropdownItem>
                원피스
              </DropdownItem>
              <DropdownItem>
                신발
              </DropdownItem>
              <DropdownItem>
                치바
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </InputGroup>
      </Col>
      <Col xs="2" className="middle-icon d-flex justify-content-between">
        <a href="/save"><span class="material-icons fs-50">shopping_cart</span></a>
        <a href="/go"><span class="material-icons fs-50">local_shipping</span></a>
        <a href="/mypage"><span class="material-icons fs-50">perm_identity</span></a>
      </Col>
    </Row>
  </Container>
  )
}

export default MiddleNav