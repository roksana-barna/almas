import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Apply from '../Applied items/Apply';

const Applied = () => {
    const allData=useLoaderData()
    console.log(allData)
    
    return (
        <div>
            <h2>jobs</h2>
            {
                allData.map(data=><Apply
                 key={data.key}
                    data={data}>

                 </Apply>)
            }
        </div>
    );
};

export default Applied;