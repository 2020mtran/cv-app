import React from 'react';
import './CVForm.css';

export default function CVForm( {formData, setFormData }) {

    const handleChange = (event) => {
        const { name , value, dataset } = event.target;
        const section = dataset.section;

        setFormData((prevData) => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [name]: value,
            },
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formData);
    };

    return <>
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Personal Information</legend>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={formData.personalInfo.name} data-section="personalInfo" onChange={handleChange} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" name="email" value={formData.personalInfo.email} data-section="personalInfo" onChange={handleChange} />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input type="text" name="phone" value={formData.personalInfo.phone} data-section="personalInfo" onChange={handleChange} />
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Education</legend>
                    <label>School Name:</label>
                    <input type="text" name="school" value={formData.education.school} data-section="education" onChange={handleChange} />
                    <label>Title of Study:</label>
                    <input type="text" name="study" value={formData.education.study} data-section="education" onChange={handleChange} />
                    <label>Date of Study:</label>
                    <input type="text" name="schoolDate" value={formData.education.schoolDate} data-section="education" onChange={handleChange} />
                </fieldset>

                <fieldset>
                    <legend>Practical Experience</legend>
                    <label>Company Name:</label>
                    <input type="text" name="company" value={formData.work.company} data-section="work" onChange={handleChange} />
                    <label>Position Title:</label>
                    <input type="text" name="position" value={formData.work.position} data-section="work" onChange={handleChange} />
                    <label>Responsibilities:</label>
                    <input type="text" name="responsibilities" value={formData.work.responsibilities} data-section="work" onChange={handleChange} />
                    <label>Date Start to End</label>
                    <input type="text" name="workDate" value={formData.work.workDate} data-section="work" onChange={handleChange} />
                </fieldset>

                <button type="submit">Submit</button>
            </form>
        </div>
    </>
}