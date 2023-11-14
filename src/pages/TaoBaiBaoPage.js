import React, { useMemo, useRef } from 'react';
import JoditEditor from 'jodit-react';
import { useDispatch, useSelector } from 'react-redux';
import { changeNoiDungBaibaoAction, changeTenBaibaoAction, changeThumbnailBaibaoAction, changeTieuDeBaibaoAction, taoBaibaoAction, } from '../action/BaiBaoAction';
import "../assets/css/TaoBaiBao.css";
import { Button, TextField } from '@mui/material';

function TaoBaiBaoPage() {

    const dispatch = useDispatch()

    const editor = useRef(null);

    const config = useMemo(
        () => ({
            readonly: false,
            width: '1000px',
            height: '400px'
        }),
        []
    );

    const { addBaiBao } = useSelector((reduxData) => reduxData.baiBaoReducer)

    const handelTaoBaoBao = () => {
        const newString = addBaiBao.noiDung.replace(/"/g, '\\"');
        dispatch(changeNoiDungBaibaoAction(newString))
        dispatch(taoBaibaoAction(addBaiBao))
    }

    const onNoiDungBaiBaoChange = (value) => {
        dispatch(changeNoiDungBaibaoAction(value));
    }

    return (
        <div className='taobaobao-container'>
            <h1>Tạo bài báo</h1>
            <TextField onChange={(e) => { dispatch(changeTenBaibaoAction(e.target.value)) }} className='tf-taobaibao' label="Tên bài báo" variant="outlined" />
            <TextField onChange={(e) => { dispatch(changeTieuDeBaibaoAction(e.target.value)) }} className='tf-taobaibao' label="Tiêu đề" variant="outlined" />
            <TextField onChange={(e) => { dispatch(changeThumbnailBaibaoAction(e.target.value)) }} className='tf-taobaibao' label="Thumbnail" variant="outlined" />
            <JoditEditor
                config={config}
                ref={editor}
                value={addBaiBao.noiDung}
                onChange={onNoiDungBaiBaoChange}
            />
            <Button variant="contained" onClick={() => { handelTaoBaoBao() }}>Tạo bài báo</Button>
        </div>
    );
}

export default TaoBaiBaoPage;