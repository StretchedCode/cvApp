import React, { Component } from "react";

class Resume extends Component{
    constructor(props){
        super(props)
    }


    createEducationalFields = () => {
        const eduInfo = this.props.information.educationInfo
        const eduFields = []

        for (let i = 1; i <= eduInfo.count; i += 1){
            const eduField = <div className="eduBody">
                <div className="schoolName">
                    <div>
                        {eduInfo.educations[i-1].schoolName}
                    </div>

                    <div className="schoolLocation">
                        {eduInfo.educations[i-1].location}
                    </div>
                </div>
                <div className="studyDetails"> 
                    <div>{eduInfo.educations[i-1].titleOfStudy}</div>
                    <div>{eduInfo.educations[i-1].dateOfStudy}</div>
                </div>
            </div>

            eduFields.push(eduField)
        }

        return eduFields
    }

    createWorkTasks = (count) => {
        const workTasks = this.props.information.workInfo.workPlaces[count].mainTasks
        const tasksArr = workTasks.split(" ,")

        const newtasksArr = tasksArr.map((task) => {
            return <li>{task}</li>
        })

        return newtasksArr
    }

    createWorkFields = () => {
        const workInfo = this.props.information.workInfo
        const workFields = []

        for (let i = 1; i <= workInfo.workCount; i += 1){
            const workField = <div className="workBody">
                <div className="workName">
                    <div>
                        {workInfo.workPlaces[i-1].positionTitle}
                    </div>
                    <div className="workDate">
                        {workInfo.workPlaces[i-1].date}
                    </div>
                </div>
                <div className="workDetails">
                    <div>{workInfo.workPlaces[i-1].companyName}</div>
                    <div>Placeholder Location</div>
                </div>
                <div className="worktasks">
                    <ul>
                        {this.createWorkTasks(i-1)}
                    </ul>
                </div>
            </div>

            workFields.push(workField)
        }

        console.log(workFields)

        return workFields
    }

    render(){
        console.log(this.props)

        const genInfo = this.props.information.generalInfo

        return(
            <div className="resume">
                <div className="resume-headermain">
                    <div className="resumeName">{genInfo.name.first} {genInfo.name.last}</div>
                    <div className="header-sub">
                        <div className="emailField">{genInfo.email}</div>
                        <div>{genInfo.phoneNumber}</div>
                    </div>
                </div>
                <div className="resumeBody">
                    <div className="resume-header">
                            Education
                    </div>
                    <div className="resume-section">
                        {this.createEducationalFields()}
                    </div>
                    <div className="resume-header">
                        Experience
                    </div>
                    <div className="resume-section">
                        {this.createWorkFields()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume