import React, { Component } from 'react'

export default class LoginForm extends Component {

    //State: là thuộc tính có sẵn của react class component, chứa các giá trị thay đổi trên giao diện khi người dùng thao tác
    state = {
        login: false
    }

    userName = 'Nguyễn Văn A';

    renderFormLogin = function () {
        if (this.state.login) {
            return <div>
                Hello {this.userName}
            </div>
        }
        return <button onClick={this.handleLogin}>Đăng nhập</button>
    }

    handleLogin = async () => {
        // this.state.login = true;
        /*
            setState là phương thức có sẵn của react class component. Nhận vào tham số là 1 state mới
            + Thay đổi các giá trị của state = state mới
            + Render lại giao diện
            + setState là 1 phương thức bất đồng bộ
        */
        await this.setState({
            login: true
        })
        
        console.log(this.state.login);

    }

    render() {
        return (
            <div className='container'>

                {/* {this.login ? <div>Hello {this.userName}</div> : <button>
                    Đăng nhập
                </button>} */}
                {this.renderFormLogin()}

            </div>
        )
    }
}
