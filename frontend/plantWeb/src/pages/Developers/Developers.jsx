import React from 'react'
import './Developers.css';
import emreresim from "../../assets/images/emreresim.png"
import berna from "../../assets//images/berna.png"
import esti from "../../assets//images/esti.png"
import egemen from "../../assets//images/egemen.png"
import kadir  from "../../assets//images/kadir.png"
import havva from "../../assets//images/havva.png"

const Developers = () => {
  return (
    <div className='devcontain'>
      <div className='columcontain'>
        <div className='resimoutout'>
          <div className='tittle'>
            <text className='tittletext'>Web/Mobil Developer</text>
          </div>
          <img src={emreresim} className='pictures' />
          <text className='isimtext'>Emre Şen</text>
        </div>
        <div className='resimoutout'>
          <div className='tittle'>
            <text className='tittletext'>AI/Data Set Developer</text>
          </div>
          <img src={esti} className='pictures' />
          <text className='isimtext'>Mehmet Esti</text>
        </div>

      </div>

      <div  className='columcontain'>
      <div className='resimoutout'>
          <div className='tittle'>
            <text className='tittletext'>Web/Mobil Developer</text>
          </div>
          <img src={berna} className='pictures' />
          <text className='isimtext'>Berna Varol</text>
        </div>
        <div className='resimoutout'>
          <div className='tittle'>
            <text className='tittletext'>Web UI Designer</text>
          </div>
          <img src={egemen} className='pictures' />
          <text className='isimtext'>Egemen Özden</text>
        </div>

      </div>

      <div className='columcontain'>
      <div className='resimoutout'>
          <div className='tittle'>
            <text className='tittletext'>Backend Devepoler</text>
          </div>
          <img src={havva} className='pictures' />
          <text className='isimtext'>Havva Nur Durudeniz</text>
        </div>
        <div className='resimoutout'>
          <div className='tittle'>
            <text className='tittletext'>Mobil UI Designer</text>
          </div>
          <img src={kadir} className='pictures' />
          <text className='isimtext'>Kadir Şenbülbül</text>
        </div>

      </div>

    </div>
  )
}

export default Developers
