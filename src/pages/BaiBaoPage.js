import React, { useEffect } from 'react';
import parse from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux';
import { changeNoiDungBaibaoAction, layBaibaoAction } from '../action/BaiBaoAction';


function BaiBaoPage() {

    const { baiBao } = useSelector((reduxData) => reduxData.baiBaoReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(layBaibaoAction(15))
        //dispatch(changeNoiDungBaibaoAction(baiBao.noiDung.replace(/\\"/g, '"')))
    }, [dispatch])

    console.log(baiBao.noiDung);

    return (
        <div style={{ width: '50%' }}>
            <h1>{baiBao.tenBaiBao}</h1>
            <p>{baiBao.ngayDang}</p>
            <p>{baiBao.luoiXem}</p>
            <p>{baiBao.tieuDe}</p>
            <div>{parse(baiBao.noiDung.replace(/\\"/g, '"'))}</div>
        </div>
    );
}

export default BaiBaoPage;