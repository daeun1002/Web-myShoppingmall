import React from 'react'
import { Container, Row, Col } from 'reactstrap';

const MiddleNav = () => {
  return (
  <Container className="middlenav my-2">
    <Row>
      <Col xs="2">
        <a href="/" className="fs-50 lh-80">쇼핑몰</a>
      </Col>
      <Col xs="6">
        <form action="/search" className="search-bg d-flex justify-content-between">
          <div className="category-btn flex-1">
            <select clasName="ctegory-box">
			        <option key="top" value="top">상의</option>
			        <option key="pants" value="pants">하의</option>
			        <option key="outer" value="outer">아우터</option>
			        <option key="bag" value="bag">가방</option>
			        <option key="bag" value="bag">악세서리</option>
		        </select>
          </div>
          <input type="text" placeholder="검색할 내용을 입력해주세요"
            className="border-0 search-box flex-7" />
          <a href="/search" className="flex-1 search-icon"><span className="material-icons">search</span></a>
        </form>
      </Col>
      <Col xs="2"></Col>
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