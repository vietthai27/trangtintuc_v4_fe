import React, { useEffect } from 'react';
import parse from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux';
import { changeNoiDungBaibaoAction, layBaibaoAction } from '../action/BaiBaoAction';
import { useParams } from 'react-router-dom';


function BaiBaoPage() {

    const { baiBao } = useSelector((reduxData) => reduxData.baiBaoReducer)

    const dispatch = useDispatch()

    let { id } = useParams();

    useEffect(() => {
        dispatch(layBaibaoAction(id))
        //dispatch(changeNoiDungBaibaoAction(baiBao.noiDung.replace(/\\"/g, '"')))
    }, [dispatch])

    console.log(baiBao.noiDung);

    return (
        <div style={{ width: '50%' }}>
            <h1>{baiBao.tenBaiBao}</h1>
            <p>{baiBao.ngayDang}</p>
            <p>{baiBao.luotXem}</p>
            <p>{baiBao.tieuDe}</p>
            <div>{parse(baiBao.noiDung.replace(/\\"/g, '"'))}</div>
        </div>
    );
}

export default BaiBaoPage;