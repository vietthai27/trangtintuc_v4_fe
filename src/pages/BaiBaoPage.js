import React, { useEffect } from 'react';
import parse from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux';
import { layBaibaoAction } from '../action/BaiBaoAction';


function BaiBaoPage() {

    const { baiBao } = useSelector((reduxData) => reduxData.baiBaoReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(layBaibaoAction(14))
    }, [dispatch])

    console.log(baiBao);


    return (
        <div style={{ width: '50%' }}>
            <h1>{baiBao.tenBaiBao}</h1>
            <p>{baiBao.ngayDang}</p>
            <p>{baiBao.luoiXem}</p>
            <p>{baiBao.tieuDe}</p>
            <div>{parse(baiBao.noiDung)}</div>
        </div>
    );
}

export default BaiBaoPage;