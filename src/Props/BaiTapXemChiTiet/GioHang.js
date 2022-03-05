import React, { Component } from 'react'
//kết nối redux
import { connect } from 'react-redux'
class GioHang extends Component {


    render() {
        console.log(this.props, 'props');
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Mã sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.gioHang.map((spGH, index) => {
                        return <tr key={index}>
                            <td>{spGH.maSP}</td>
                            <td><img src={spGH.hinhAnh} alt='...' width={50} height={50} /></td>
                            <td>{spGH.tenSP}</td>
                            <td>{spGH.giaBan}</td>
                            <td>
                                <button className='btn btn-primary' onClick={()=>{
                                    this.props.tangGiamSoLuong(spGH.maSP,1)
                                }}>+</button>
                                {spGH.soLuong}
                                <button className='btn btn-primary ml-2' onClick={()=>{
                                    this.props.tangGiamSoLuong(spGH.maSP,-1);
                                }}>-</button>
                            </td>
                            <td>{spGH.giaBan * spGH.soLuong}</td>
                            <td><button className='btn btn-danger' onClick={() => {
                                this.props.xoaGioHang(spGH.maSP);
                            }}>Xoá</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (rootReducer) => {

    return {
        gioHang: rootReducer.gioHangReducer.gioHang,

    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        xoaGioHang: (maSanPhamClick) => {
            console.log('maSanPham',maSanPhamClick);
            const action = {
                type:'XOA_GIO_HANG',
                maSanPhamClick
            }
            //Gửi dữ liệu lên redux
            dispatch(action);
        },
        tangGiamSoLuong : (maSanPham,soLuong) => {
            // console.log('maSP',maSanPham);
            // console.log('soLuong',soLuong);
            const action = {
                type:'TANG_GIAM_SL',
                maSanPham,
                soLuong
            };
            //Sử dụng hàm dispatch đưa dữ liệu lên redux
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(GioHang);