import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeNoiDungBaibaoAction } from '../action/BaiBaoAction';
import "../assets/css/TaoBaiBao.css";
import { TextField } from '@mui/material';

function TaoBaiBao() {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const editor = useRef(null);

    const { addBaiBao } = useSelector((reduxData) => reduxData.baiBaoReducer)

    const denTrangBaiBao = () => {
        const newString = addBaiBao.noiDung.replace(/"/g, '\\"');
        navigate("/baibao")
    }

    const onNoiDungBaiBaoChange = (value) => {
        dispatch(changeNoiDungBaibaoAction(value));
    }
    //change

    return (
        <div className='container'>
            <h1>Tạo bài báo</h1>
            <TextField className='tf-taobaibao' label="Tên bài báo" variant="outlined" />
            <TextField className='tf-taobaibao' label="Tiêu đề" variant="outlined" />
            <TextField className='tf-taobaibao' label="Thumbnail" variant="outlined" />
            <JoditEditor
                ref={editor}
                value={addBaiBao.noiDung}
                onChange={onNoiDungBaiBaoChange}
            />
            {addBaiBao.noiDung}
            <button onClick={() => {denTrangBaiBao()}}>TaoBaiBao</button>
        </div>
    );
}

export default TaoBaiBao;