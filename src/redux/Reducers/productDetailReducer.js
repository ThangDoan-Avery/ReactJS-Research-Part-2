

const stateDefault = { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }



export const productDetailReducer = (state = stateDefault,action) => {
    // console.log('action',action)

    switch(action.type) {
        case 'XEM_CHI_TIET_SP': {
            state = action.sanPhamClick

            return {...state};
        }
        default : return state;
    }

}