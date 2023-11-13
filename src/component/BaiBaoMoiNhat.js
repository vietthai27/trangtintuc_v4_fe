import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layBaibaoMoiNhatAction } from '../action/BaiBaoAction';
import { Link } from 'react-router-dom';
import '../assets/css/BaiBaoMoiNhat.css'

function BaiBaoMoiNhat() {
    const dispatch = useDispatch()

    const { danhSachBaiBao } = useSelector((reduxData) => reduxData.baiBaoReducer)

    useEffect(() => {
        dispatch(layBaibaoMoiNhatAction())
    }, [])

    return (
        <div className='container'>
            <h2>Bài báo mới nhất</h2>
            {danhSachBaiBao.map((item) => (
                <Link className='items' to={`/baibao/${item.id}`} key={item.id}>
                    <div className='thumbnail'>
                        <img src={item.thumbnail} />
                    </div>
                    <div className='info'>
                        <p>Ngày đăng:{item.ngayDang.substring(0, 10)}</p>
                        <b>{item.tenBaiBao}</b>
                        <i>{item.tieuDe}</i>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default BaiBaoMoiNhat;