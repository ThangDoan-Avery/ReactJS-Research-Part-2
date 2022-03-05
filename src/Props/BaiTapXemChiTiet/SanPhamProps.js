import React, { Component } from 'react'
//Kết nối redux
import {connect} from 'react-redux'
class SanPhamProps extends Component {
    render() {
        let {sanPham,xemChiTiet} = this.props;
        return (
            <div className='card'>
                <img src={sanPham.hinhAnh} height={300} alt='...' />
                <div className='card-body'>
                    <p>{sanPham.tenSP}</p>
                    <p>{sanPham.giaBan}</p>
                    <button className='btn btn-success' onClick={() => {
                        // this.props.xemChiTiet(sanPham);
                        // xemChiTiet(sanPham)
                        this.props.xemChiTietSP(sanPham)
                    }}>Xem chi tiết</button>
                    <button className='btn btn-danger ml-2' onClick={()=>{
                        this.props.themGioHang(sanPham);
                    }}>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        xemChiTietSP: (sanPhamClick) => {
            //tạo 1 action
            const action = {
                type:'XEM_CHI_TIET_SP',
                sanPhamClick:sanPhamClick
            };
            //Đưa action lên redux
            dispatch(action);
        },
        themGioHang: (sanPham) => {
            //tạo ra 1 action
            const action = {
                type:'THEM_GIO_HANG',
                sanPham
            }
            //Đưa dữ liệu lên redux
            dispatch(action);
        } 
    }
}


export default connect(null,mapDispatchToProps)(SanPhamProps);