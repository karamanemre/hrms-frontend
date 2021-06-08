import React from 'react'
import { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";

export default function JobExperience() {


    const [jobExperience, setjobExperience] = useState([])

  useEffect(() => {
    let  = new 
    setjobExperience.getAll().then((result) => setjobExperience(result.data.data));
  }, []);


    return (
        <div>
            
        </div>
    )
}
