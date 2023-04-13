import React from 'react';
import { Link } from 'react-router-dom';
// import Applied from '../Applied Jobs/Applied';

const Header = () => {
       
    return (
        <div className=''>
        <div className='mx-auto mt-10'>
           <div className='flex justify-evenly'>
            <h2 className='text-2xl font-bold'>ProCarrer</h2>
            <nav className='font-bold text-blue-600 hover:text-red-400'>
                <Link  className='mx-5' to = '/'>Home</Link>
                <Link className='mx-5' to = '/statistics'>Statistics</Link>
                <Link className='mx-5' to = '/applied'>Applied Job</Link>
                <Link className='mx-5' to = '/blog'>Blog</Link>

            </nav>
            <button  className='bg-blue-600 py-2 px-3 rounded-md text-white'>Start Applying </button>
           

           </div>
        </div>
        </div>
    );
};

export default Header;