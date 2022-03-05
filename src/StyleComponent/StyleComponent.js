import React, { Component } from 'react'
import './style.css';
import style from './Style.module.css';

export default class StyleComponent extends Component {

    render() {
        const styleObject = {
            backgroundColor: 'black',
            color: 'green'
        }
        return (
            <div>
                <p className='pColorRed'>Hello frontend 70</p>
                <p className={style.pColorGreen}>hello fe70</p>
                <p className={style['p-color-blue']}>hello fe70</p>
                <p style={styleObject}> 123123 </p>
                <p style={{
                    backgroundColor: 'black',
                    color: 'green',
                }}></p>
            </div>
        )
    }
}
