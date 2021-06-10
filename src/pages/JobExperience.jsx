import React from 'react'
import { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import JobExperienceService from "../services/jobExperienceService";

export default function JobExperience() {

    const [jobExperience, setjobExperience] = useState([])

  useEffect(() => {
    let jobExperienceService  = new JobExperienceService()
    setjobExperience.getAll().then((result) => setjobExperience(result.data.data));
  }, []);


    return (
        <div>
            Job experience
        </div>
    )
}
