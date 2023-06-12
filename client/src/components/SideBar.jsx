import React from 'react'
import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';
import {logo,sun} from '../assets';
import {navlinks} from '../constants';

const Icon = ()=>{

}
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
