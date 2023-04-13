import React, { useEffect } from 'react';

const JobDetails = () => {
    useEffect(()  => {
        fetch('../product.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[]);
    return (
        <div>
            jhdfdj
        </div>
    );
};

export default JobDetails;