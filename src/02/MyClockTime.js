import './MyClockStyle.css'
import style from './My.module.css'
import { useEffect, useState } from 'react';

function MyClockTime(){

  const [ct, setCt] = useState(new Date());

  useEffect(() => {
    const tm = setInterval(()=>{
      setCt(new Date())
    }, 1000);

    return ()=> {
      clearInterval(tm) // 2. 후에 컴포넌트 사라질 때 return
    }
  }, []) // 1. 컴포넌트 최초 생성시 동작

  return(
    <div className='flex justify-center mt-5'>
    <div className={style.c1}>{ct.toLocaleTimeString()}</div>
    </div>
  )
}
export default MyClockTime;