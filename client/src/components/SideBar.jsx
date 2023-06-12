import React from 'react'
import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';
import {logo,sun} from '../assets';
import {navlinks} from '../constants';

const Icon = ({styles,name,imageUrl,isActive,disabled,handleClick})=>(
<div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive===name && 'bg-[#2c2f32]'} flex justify-center item-center ${!disabled} && 'cursor-pointer'} ${styles}`}>
    {!isActive?(
        <img src={imageUrl} alt='fund_logo' className='w-1/2 h-1/2'/>
    ):(
        <img src={imageUrl} alt='fund_logo' className={`w-1/2 h-1/2 ${isActive!==name && 'grayscale'}`}/>
    )}

</div>
    )
const SideBar = () => {
    const naviagte = useNavigate();
    const [isActive,setIsActive] = useState('dashboard');
  return (
    <div className='flex justify-between item-center flex-col sticky top-5 h-[93vh]'>
        <Link to='/'>
            <Icon style="w-[52px] h-[52px] bg-[#2c2f32]" imageUrl={logo}/>
        </Link>
   
    </div>
  )
}

export default SideBar
