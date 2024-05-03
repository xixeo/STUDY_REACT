import './MyClockStyle.css'
import style from './My.module.css'

function MyClockTime(){
  const now = new Date();
  const nowStr = now.toLocaleTimeString();
  const gubun = nowStr.substring(0, 2);
  // const st ={
  //   color: "yellow", fontWeight: "bold", fontSize: "1.2rem"
  // }
  // let divStyle;
  // if(gubun == '오전') divStyle = "div1";
  // else divStyle = "div2";

  return(
    <>
    {/* {
      (gubun === '오전') ?  <div  className='div1'>{nowStr}</div>
                      :  <div  className='div2'>{nowStr}</div>
    }    */}

    {/* <div className={(gubun === '오전') ? 'div1':'div2'}>{nowStr}</div> */}

    {/* <div style={{color: "yellow", fontWeight: "bold", fontSize: "1.2rem"}}>{nowStr}</div> */}
    {/* <div style={st}>{nowStr}</div> */}
    <div className={style.c1}>{nowStr}</div>
    </>
  )
}
export default MyClockTime;