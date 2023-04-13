import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    let markArray = [
        { 
          name: "html",
          assignment: "assingment 1",
          mark: 46
        },
        { 
          name: "css",
          assignment: "assingment 2",
          mark: 58
        },
        { 
          name: "html-css",
          assignment: "assingment 3",
          mark: 48
        },
        { 
          name: "api",
          assignment: "assingment 4",
          mark: 35 
        },
        { 
          name: "js",
          assignment: "assingment 5",
          mark: 57
        },
        { 
          name: "js",
          assignment: "assingment 6",
          mark: 52 
        },
        { 
          name: "react",
          assignment: "assingment 7",
          mark: 60 
        },
        { 
          name: "debug",
          assignment: "assingment 8",
          mark:60
        }
      ];
      
      
    return (
     
        <div>
             <ResponsiveContainer width="100%" height={300}>

            <AreaChart
            width={700}
            height={500}
            data={markArray}>
            
            <XAxis dataKey="assignment" />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />


          <YAxis  dataKey= "mark"/>
          <Tooltip />  




            </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;