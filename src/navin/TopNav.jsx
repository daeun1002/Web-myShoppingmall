import React from 'react'
import { Container } from 'reactstrap';

const TopNav = () => {
  return (
    <div className="topnav bg-ed">
      <Container className="text-end">
        <a href="/login" className="me-2 topnav-menu">로그인</a>
        <span className="bar"></span>
        <a href="/register" className="mx-2 topnav-menu">회원가입</a>
        <span className="bar"></span>
        <a href="/infocenter" className="ms-2 topnav-menu">고객센터</a>
      </Container>
    </div>
    
  )
}

export default TopNav