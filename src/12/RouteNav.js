import Btn from '../05/Btn'
import { useNavigate } from 'react-router-dom'

export default function RouteNav() {
  const navigate = useNavigate();

  return (
    <div className='mb-5 w-full flex flex-row flex-wrap border-b ps-0'>
      <Btn caption="HOME" handleClick={()=>{navigate('/')}} customClass={'my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary '} />
      <Btn caption="PAGE 1" handleClick={()=>{navigate('/p1/1')}} customClass={'my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary '} />
      <Btn caption="PAGE 2" handleClick={()=>{navigate('/p2')}} customClass={'my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary '} />
    </div>
  )
}
