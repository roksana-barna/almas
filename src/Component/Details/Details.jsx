import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Show from '../ShowDetail/Show';

const Details = () => {
    // const jobData=useLoaderData();

    const [datas, setDatas] = useState([]);
        useEffect(() => {
            fetch('../Jobs.json')
                .then(res => res.json())
                .then(data => setDatas(data))
        }, []);
    // console.log(datas);
    const {id}=useParams();

    // console.log(id)
    const [details,setDetails]=useState([]);
    useEffect(()=>{
        const findData=datas.find(data=>parseInt(id)===parseInt(data.id));
        setDetails(findData);
    },[])
    // console.log(details);
    return (
        <div>
            <div>
            <h2 className=' text-2xl  text-center text-blue font-bold py-5'>job details</h2>

            </div>
           
            <div> <h2></h2></div>
           {
            details?.map(detail=><Show
            key={detail.id}
            detail={detail}
            >

            </Show>
           )}
            {/* // <Show  detail={detail}></Show> */}
    
            
        </div>
    );
};

export default Details;