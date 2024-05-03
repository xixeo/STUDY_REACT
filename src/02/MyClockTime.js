import './MyClockStyle.css'

function MyClockTime(){
  const now = new Date();
  const nowStr = now.toLocaleTimeString();
  const gubun = nowStr.substring(0, 2);
  // let divStyle;
  // if(gubun == '오전') divStyle = "div1";
  // else divStyle = "div2";

  return(
    <>
    {/* {
      (gubun === '오전') ?  <div  className='div1'>{nowStr}</div>
                      :  <div  className='div2'>{nowStr}</div>
    }    */}

    <div className={(gubun === '오전') ? 'div1':'div2'}>{nowStr}</div>
    </>
  )
}
export default MyClockTime;