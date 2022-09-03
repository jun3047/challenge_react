import React from 'react';
import './style.css';

const Header: React.FunctionComponent = () => {

    return<header>
        <div className="wrap"> 
            <div className="logo">
                <a href="/index.html">CHALLENG</a>
            </div>
            <nav>
                <ul>
                    <li><a href="/index.html">홈</a></li>
                    <li><a href="/my.html">내 챌린지</a></li>
                    <li><a href="">내 정보</a></li>
                </ul>
            </nav>
        </div>
    </header>
}

export default Header
