import { Button, TextField, Box } from '@mui/material';
import React from 'react';
import '../assets/css/LoginPage.css'
import { useDispatch, useSelector } from 'react-redux';
import { dangNhapAction, thayDoiMatKhauAction, thayDoiTenNguoiDungAction } from '../action/UserAction';
import { Link } from 'react-router-dom';
import { boxStyleLogin } from '../assets/Util/StyleConfig';
import { toast } from 'react-toastify';


function LoginPage() {

    const dispatch = useDispatch()

    const { userData } = useSelector((reduxData) => reduxData.userReducer)

    const handelDangNhap = () => {
        if (userData.username === '' || userData.username === undefined) {
            toast.warn("Chưa nhập tên người dùng !!!")
        }
        else if (userData.password === '' || userData.password === undefined) {
            toast.warn("Chưa nhập mật khẩu !!!")
        }
        else {
            dispatch(dangNhapAction(userData))
        }
    }

    return (
        <div className='login-container'>
            <div>
                <Box sx={boxStyleLogin}>
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
            </div>
        </div >
    );
}

export default LoginPage;