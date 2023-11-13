import React from 'react';
import '../assets/css/Heading.css'
import DanhMuc from '../component/DanhMuc'

function Heading() {
    return (
        <div className='head'>
            <img className='logo' src='/App images/logo.png' alt='logo'/>
            <DanhMuc/>
        </div>
    );
}

export default Heading;