
import {memo} from 'react'
const Header = () => {
  return (
    <header className="w-full">
      <div className="container flex justify-between items-center mx-auto px-4 ">
        <div className='flex items-center space-x-4' >
          <a href=''><h2 className=" text-[40px] bg-indigo-600" >LOGO</h2></a> 
        </div>
        <div className='flex items-center space-x-4'>
            <a href={{}} className=" inline-block mx-1 px-6 py-2 rounded-lg text-indigo-600"> Login </a>
            <a href={{}} className=" inline-block mx-1 px-6 py-2 rounded-lg bg-indigo-600 text-white "> SignUp </a>
        </div>
      </div>
    </header>
  );
};
export default memo(Header);
