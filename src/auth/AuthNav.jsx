// AuthNav.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonSolid } from '../components/common/base/buttons/Button';

export default function AuthNav({ text, buttonText }) {
  const navStyle = 'flex justify-end';
  const navSpanStyle = 'flex items-center gap-3';

  return (
    <div className="px-[30px] py-[20px] md:px-[50px] lg:px-[70px] border-b">
      <nav className={navStyle}>
        <span className={navSpanStyle}>
          <p className="text-p-black text-[14px] font-medium">{text}</p>
          <Link to={buttonText === 'Login' ? '/login' : '/'}>
            <ButtonSolid title={buttonText} text={buttonText} />
          </Link>
        </span>
      </nav>
    </div>
  );
}
