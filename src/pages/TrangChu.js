import React from 'react';
import '../assets/css/TrangChu.css'
import BaiBaoMoiNhat from '../component/BaiBaoMoiNhat';
import Heading from '../component/Heading';

function TrangChu() {


    return (
        <div className='home'>
            <Heading/>
            <BaiBaoMoiNhat/>          
        </div>
    );
}

export default TrangChu;