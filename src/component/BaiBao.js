import React from 'react';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';

function BaiBao() {

    const { dataBaibao } = useSelector((reduxData) => reduxData.baiBaoReducer)

    return (
        <div style={{width:'50%'}}>
            {parse(dataBaibao)}
        </div>
    );
}

export default BaiBao;