import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'
import style from './BaiTapGameXucXac.module.css';
export default class BaiTapGameXucXac extends Component {

  render() {
    return (
      <div className={`${style.fontGame} `}  style={{backgroundImage:'url(./img/gameXucXac/bgGame.png)',width:'100vw',height:'100vh'}}>
          <h3 className='text-center display-4 pt-5'>BÀI TẬP GAME XÚC XẮC</h3>
          <XucXac />
          <KetQuaTroChoi />
      </div>
    )
  }
}
