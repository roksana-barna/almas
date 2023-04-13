import React from 'react';

const Apply = ({data}) => {
    const { JobTitle, JobDescription, JobResponsibility, Salary, EducationaRequirements, Experiences, email, Location, phone
    } = data;

    return (
        <div>
            {JobTitle}
            
        </div>
    );
};

export default Apply;