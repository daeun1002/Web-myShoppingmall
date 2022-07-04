import React from 'react'
import { Container, Row, Col, Input } from 'reactstrap';

const MiddleNav = () => {
  return (
  <Container className="middlenav">
    <Row>
      <Col xs="2">
        <a href="/" className="fs-50 lh-80">쇼핑몰</a>
      </Col>
      <Col xs="8">
        <form action="/search" className="search-bg d-flex">
          <div className="category-btn">
            d
          </div>
          <Input type="text" placeholder="검색할 내용을 입력해주세요"
            className="border-0"/>
          <a href="/search"><span className="material-icons">search</span></a>
        </form>
      </Col>
      <Col xs="2" className="middle-icon d-flex justify-content-between">
        <a href="/save"><span className="material-icons fs-50">shopping_cart</span></a>
        <a href="/go"><span className="material-icons fs-50">local_shipping</span></a>
        <a href="/mypage"><span className="material-icons fs-50">perm_identity</span></a>
      </Col>
    </Row>
  </Container>
  )
}

export default MiddleNav