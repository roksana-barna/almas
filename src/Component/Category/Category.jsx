import React from 'react';


const Category = ({category}) => {

    // console.log(category)
    const {CategoryName,JobAvaiblity,CategoryLogo}=category;
    return (
        <div className="">
            
            <div className=''>
                <div className='bg-gray-200 p-7'>
                 
                <img className='w-12' src={CategoryLogo} alt="" />
                 <h3 className='font-bold mt-7'>{CategoryName}</h3>
                 <p className='font-normal text-gray-400'>{JobAvaiblity}</p>
        
               

                </div>
            </div>
        </div>
    );
};

export default Category;