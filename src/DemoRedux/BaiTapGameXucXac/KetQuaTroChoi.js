import React, { Component } from 'react'
import { connect } from 'react-redux'
class KetQuaTroChoi extends Component {
    render() {
        let { banChon, soBanThang, tongSoBanChoi } = this.props.baiTapGameXucXacReducer;
        console.log('this.props', this.props);
        return (
            <div className='text-center display-4'>
                <div>Bạn chọn : <span className='text-danger'>
                {banChon ? 'TÀI' : 'XỈU'}    
                </span> </div>
                <div>Số bàn thắng : <span className='text-success'>{soBanThang}</span> </div>
                <div>Tổng số bàn chơi : <span className='text-warning'>{tongSoBanChoi}</span> </div>
                <button className='btn btn-success'>
                    <div className='p-2' style={{ fontSize: 25 }} onClick={()=>{
                        const action = {
                            type:'PLAY_GAME',
                            // mangXucXac: [{}] 
                        }
                        //Gửi dữ liệu action lên redux
                        this.props.dispatch(action);
                    }}>Play game</div>
                </button>
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        // banChon:rootReducer.baiTapGameXucXacReducer.banChon,
        // soBanThang:rootReducer.baiTapGameXucXacReducer.soBanThang
        baiTapGameXucXacReducer: rootReducer.baiTapGameXucXacReducer
    }
}

export default connect(mapStateToProps)(KetQuaTroChoi);