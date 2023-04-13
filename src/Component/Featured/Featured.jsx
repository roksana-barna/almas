import React from 'react';
import "./Featured.css";
import { MapPinIcon} from '@heroicons/react/24/solid';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import Details from '../Details/Details';




const Featured = ({job}) => {

    // console.log(job.id);
    // console.log(addToViewDetails)
   
//  const  id=job.id;
    return (
        < div>
            <div className='border border-slate-400 mr-10 mt-10 p-5'>
                <img className='w-40' src={job.CompanyLogo} alt="" />
                <h2 className='font-bold text-xl '>{job.JobTitle}</h2>
                <p className='font-normal py-2'>{job.CompanyName}</p>
                <button className='border border-blue-400 px-2 rounded py-1 text-blue-500'>{job.Remote}</button>
                <button className='border border-blue-400 px-2 rounded py-1 text-blue-500 ml-2'>{job.FullTime
                }</button>
                <div className='flex'>
                <MapPinIcon className="h-4 w-4 text-blue-500 mt-5" /><p className='font-normal p-4'> 
            
                        {job.Location
                        }</p>
                    < CurrencyDollarIcon class="h-4 w-4 mt-5 text-blue-500" /><p className='mt-4'> Salary:{job.Salary}</p>
                </div>


                <button  className='bg-blue-600 py-2 px-3 rounded-md text-white'><Link to={`/detail/${job.id}`}>View Details</Link> </button>
              
            </div>
        </div>
    );
};
export default Featured;