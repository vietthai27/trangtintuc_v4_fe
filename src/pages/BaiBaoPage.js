import React, { useEffect } from 'react';
import parse from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux';
import { layBaibaoAction } from '../action/BaiBaoAction';
import { useParams } from 'react-router-dom';
import '../assets/css/BaiBao.css'


function BaiBaoPage() {

    const { baiBao } = useSelector((reduxData) => reduxData.baiBaoReducer)

    const dispatch = useDispatch()

    let { id } = useParams();

    useEffect(() => {
        dispatch(layBaibaoAction(id))
    }, [dispatch])

    return (
        <div className='baibao-container'>
            <h1>{baiBao.tenBaiBao}</h1>
            <div className='baibao-info'>
                <p>Ngày đăng: {baiBao.ngayDang.substring(0, 10)}</p>
                <p>Lượt xem:{baiBao.luotXem}</p>
            </div>
            <i>{baiBao.tieuDe}</i>
            <div className='baibao-noidung'>{parse(baiBao.noiDung.replace(/\\"/g, '"'))}</div>
        </div>
    );
}

export default BaiBaoPage;