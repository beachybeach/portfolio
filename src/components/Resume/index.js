import React from "react";
import resume from "../../assets/documents/Resume.pdf"

const Resume = () => {
  return (
    <div>
      <a href={resume} className="btn btn-primary btn-lg active" role="button" aria-pressed="true" download>download </a>
    </div >
  )
}


export default Resume;