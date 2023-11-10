import { Button, TextField, Box } from '@mui/material';
import React from 'react';
import '../assets/css/LoginPage.css'
import { useDispatch, useSelector } from 'react-redux';
import { dangNhapAction, thayDoiMatKhauAction, thayDoiTenNguoiDungAction } from '../action/UserAction';
import { Link } from 'react-router-dom';


function LoginPage() {

    const dispatch = useDispatch()

    const { userData } = useSelector((reduxData) => reduxData.userReducer)

    const handelDangNhap = () => {
        dispatch(dangNhapAction(userData))
    }

    return (
        <div className='container'>

            <Box sx={{ m: "30px auto", p: "10px", alignItems: "center", backgroundColor: "white", borderRadius: "15px", boxShadow: 10 }}>
                <h1>Đăng nhập</h1>
                <TextField
                    className='input'
                    label="Tên người dùng"
                    type="text"
                    variant="standard"
                    onChange={(e) => { dispatch(thayDoiTenNguoiDungAction(e.target.value)) }}
                />
                <TextField
                    className='input'
                    label="Mật khẩu"
                    type="password"
                    variant="standard"
                    onChange={(e) => { dispatch(thayDoiMatKhauAction(e.target.value)) }}
                />
                <Button className='button' variant="contained" onClick={() => { handelDangNhap() }}>Đăng nhập</Button>
                Chưa có tài khoản ? <Link to={"/signup"}>Đăng ký</Link>
            </Box>
        </div >
    );
}

export default LoginPage;