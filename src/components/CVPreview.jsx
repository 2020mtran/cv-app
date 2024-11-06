import React from 'react';

export default function CVPreview( { formData } ) { // {} around formData is basically const formData = props.formData;


    return (
        <div>
            <h2>Preview CV</h2>
            <h3>Personal Information</h3>
            <p>Name: {formData.personalInfo.name}</p>
            <p>Email: {formData.personalInfo.email}</p>
            <p>Phone: {formData.personalInfo.phone}</p>

            <h3>Education</h3>
            <p>School: {formData.education.school}</p>
            <p>Title of Study: {formData.education.study}</p>
            <p>Date of Study: {formData.education.schoolDate}</p>

            <h3>Practical Experience</h3>
            <p>Company Name: {formData.work.company}</p>
            <p>Position Title: {formData.work.position}</p>
            <p>Responsibilities: {formData.work.responsibilities}</p>
            <p>Date Start to End: {formData.work.workDate}</p>
        </div>
    );
}