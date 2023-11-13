import { Button, TextField, Box } from '@mui/material';
import React from 'react';
import '../assets/css/LoginPage.css'
import { useDispatch, useSelector } from 'react-redux';
import { dangKyAction, thayDoiEmailAction, thayDoiMatKhauAction, thayDoiNhapLaiMatKhauAction, thayDoiTenNguoiDungAction } from '../action/UserAction';
import { toast } from 'react-toastify';
import validator from "validator";

function SignUpPage() {

    const dispatch = useDispatch()

    const { userData, retypePassword } = useSelector((reduxData) => reduxData.userReducer)

    const handelDangKy = () => {

        if (userData.username === '' || userData.username === undefined) {
            toast.warn("Chưa nhập tên người dùng !!!")
        }
        else if (userData.password === '' || userData.password === undefined) {
            toast.warn("Chưa nhập mật khẩu !!!")
        }
        else if (!validator.isEmail(userData.email)) {
            toast.warn("Định dạng email chưa hợp lệ !!!")
        }
        else if (userData.password !== retypePassword) {
            console.log(userData);
            toast.warn("Mật khẩu chưa trùng !!!")
        } else {
            dispatch(dangKyAction(userData))
        }

    }

    return (
        <div className='container'>

            <Box sx={{ m: "30px auto", p: "10px", alignItems: "center", backgroundColor: "white", borderRadius: "15px", boxShadow: 10, display: "flex", flexDirection: "column", height: "50vh", justifyContent: "space-evenly",padding: "3rem" }}>
                <h1>Đăng ký</h1>
                <TextField
                    className='input'
                    label="Tên người dùng"
                    type="text"
                    variant="standard"
                    onChange={(e) => { dispatch(thayDoiTenNguoiDungAction(e.target.value)) }}
                />
                <TextField
                    className='input'
                    label="Email"
                    type="text"
                    variant="standard"
                    onChange={(e) => { dispatch(thayDoiEmailAction(e.target.value)) }}
                />
                <TextField
                    className='input'
                    label="Mật khẩu"
                    type="password"
                    variant="standard"
                    onChange={(e) => { dispatch(thayDoiMatKhauAction(e.target.value)) }}
                />
                <TextField
                    className='input'
                    label="Nhập lại mật khẩu"
                    type="password"
                    variant="standard"
                    onChange={(e) => { dispatch(thayDoiNhapLaiMatKhauAction(e.target.value)) }}
                />
                <Button className='button' variant="contained" onClick={() => { handelDangKy() }}>Đăng ký</Button>
            </Box>
        </div >
    );
}

export default SignUpPage;