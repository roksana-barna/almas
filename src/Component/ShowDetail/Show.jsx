import React, { useEffect, useState } from 'react';
import { CurrencyDollarIcon} from '@heroicons/react/24/solid'
import Applied from '../Applied Jobs/Applied';
// import { Link } from 'react-router-dom';


const Show = ({ detail }) => {
    console.log(detail);
    // const {CompanyLogo,JobTitle,CompanyName,Remote,Onsite,Location,FullTime,Salary,JobDescription,JobResponsibility,EducationaRequirements,email,phone,Experiences }=detail;

    
      
    
    return (
        <div className='grid grid-cols-2'>
            <div className='ml-20'>
                <h2> <span className='font-bold'>Job Description</span>:{JobDescription}</h2>

                <h2><span className='font-bold'> Job Responsibility</span>{JobResponsibility}</h2>
                <h2><span className='font-bold'>Job Description</span> Educational requirement:{EducationaRequirements}</h2>
                <h2><span className='font-bold'>Job Description</span> Experience{Experiences
                }</h2>

            </div>

            <div className='bg-sky-300 w-6/12 ml-56 p-7 rounded'>
                <h2 className='font-bold'>Job details</h2>

                
                <p> < CurrencyDollarIcon className="h-6 w-6 text-blue-500 " />salary:{Salary}</p>
                <p>JobTitle:{JobTitle}</p>
                <h2><span className='font-bold py-5'>Contact Information</span></h2>
                <p>Phone{phone
                }</p>
                <p>email{email
                }</p>
                <p>Address{Location}</p>
                <button className='bg-blue-700 text-white p-3 px-6 mt-6'>Apply Now</button>
                


            </div>
        </div>

    );
};

export default Show;