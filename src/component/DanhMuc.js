import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layDuLieuMenuAction, layDuLieuMenuConAction } from '../action/MenuAction';
import '../assets/css/Menu.css'
import { Link } from 'react-router-dom';

function DanhMuc() {

    const dispatch = useDispatch()

    const { menuData } = useSelector((reduxData) => reduxData.menuReducer)

    useEffect(() => {
        dispatch(layDuLieuMenuAction())
    }, [])


    return (
        <div className="menu">
            <div className="menu_list">
                {menuData.map((item) => (
                    <div className="parent_box" key={item.id}>
                        <p className="parent">{item.tenDanhMuc}</p>
                        <div className="child_box">
                            {item.danhMucCon.map((item) => (
                                <div className="child_contain" key={item.id}>
                                    <Link style={{ textDecoration: "none" }}>
                                        <p className="child">{item.tenDanhMucCon}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DanhMuc;