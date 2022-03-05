

const stateDefault = {
    banChon: false, //true là tài false là xỉu
    soBanThang: 10,
    tongSoBanChoi: 20,
    mangXucXac: [
        { soDiem: 1, img: './img/gameXucXac/1.png' },
        { soDiem: 2, img: './img/gameXucXac/2.png' },
        { soDiem: 3, img: './img/gameXucXac/3.png' },
    ]
}


export const baiTapGameXucXacReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case 'DAT_CUOC': {
            state.banChon = action.banChon;
            return { ...state };
        }
        case 'PLAY_GAME': {
            //Tạo ra mảng xúc xắc ngẫu nhiên
            let mangXucXacNN = [];
            //Thực hiện random 3 lần => Tạo ra object ngẫu nhiên
            for (let i = 1; i <= 3; i++) {
                //Mỗi lần lặp tạo ra 1 số ngẫu nhiên
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                //Từ số ngẫu nhiên tạo ra object xúc xắc ngẫu nhiên
                let xxnn = {soDiem: soNgauNhien, img :`./img/gameXucXac/${soNgauNhien}.png`};
                //Thêm vào mảng xúc xắc ngẫu nhiên
                mangXucXacNN.push(xxnn);
            }
            //Cập nhật lại state.mangXucXac = mảng ngẫu nhiên
            state.mangXucXac = mangXucXacNN;

            //Chạy reduce hoặc for tính điểm
            let tongDiem = state.mangXucXac.reduce((diem,xx,index) => {
                return diem += xx.soDiem;
            },0);

            if((tongDiem <= 11 && state.banChon === false) || (tongDiem >11 && state.banChon === true)) {
                //Nếu thắng thì + state bàn thắng
                state.soBanThang += 1;
            }         
            //Cập nhật số bàn chơi   
            state.tongSoBanChoi += 1;

            return {...state};
        }

        default: return state;
    }
}