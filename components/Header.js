import Link from 'next/link';
import React from 'react';

const linkStyle = {
  marginRight: '1rem',
};

const Header = () => {
  return (
    <div>
      <Link href="/login">
        <a style={linkStyle}>로그인</a>
      </Link>

      <Link href="/register">
        <a style={linkStyle}>회원가입</a>
      </Link>
    </div>
  );
};

export default Header;
