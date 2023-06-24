import React, { Component } from 'react';
import Resume from './resume';

class Form extends Component{

    constructor(props){
        super(props)

        this.state = {
            generalInfo: {
                name: {
                    first: "",
                    last: "",
                },
                email: "",
                phoneNumber: "",
            },
            educationInfo: {
                count: 1,
                educations: [
                    {
                        schoolName: "",
                        titleOfStudy: "",
                        dateOfStudy: "",
                        location: "",
                    }
                ],
            },
            workInfo: {
                workCount: 1,
                workPlaces: [
                    {
                        companyName: "",
                        positionTitle: "",
                        mainTasks: "",
                        date: "",
                    }
                ]
            }
        }
    }

    firstNameInputHandle = (e) => {

        const generalInformation = this.state.generalInfo
        generalInformation.name.first = e.target.value

        this.setState({generalInfo: generalInformation})
    }

    lastNameInputHandle = (e) => {
        const generalInformation = this.state.generalInfo
        generalInformation.name.last = e.target.value

        this.setState({generalInfo: generalInformation})
    }

    emailInputHandle = (e) => {
        const generalInformation = this.state.generalInfo
        generalInformation.email = e.target.value
        
        this.setState({generalInfo: generalInformation})
    }

    phoneInputHandle = (e) => {
        const generalInformation = this.state.generalInfo
        generalInformation.phoneNumber = e.target.value
        
        this.setState({generalInfo: generalInformation})

        console.log(this.state.generalInfo)
    }

    schoolInputHandle = (e, count) => {
        const uniqEducation = this.state.educationInfo.educations.slice()

        uniqEducation[count].schoolName = e.target.value

        this.setState({
            educations: uniqEducation
        })
    }

    titleStudyInputHandle = (e, count) => {
        const uniqEducation = this.state.educationInfo.educations.slice()

        uniqEducation[count].titleOfStudy = e.target.value

        this.setState({
            educations: uniqEducation
        })
    }

    dateStudyHandle = (e, count) => {
        const uniqEducation = this.state.educationInfo.educations.slice()

        uniqEducation[count].dateOfStudy = e.target.value

        this.setState({
            educations: uniqEducation
        })
    }

    schoolLocationHandle = (e, count) => {
        const uniqEducation = this.state.educationInfo.educations.slice()

        uniqEducation[count].location = e.target.value

        this.setState({
            educations: uniqEducation
        })
    }

    companyNameHandle = (e, count) => {

        const company = this.state.workInfo.workPlaces.slice()

        company[count].companyName = e.target.value

        this.setState({
            workPlaces: company
        })
    }

    workDurationHandle = (e, count) => {

        const company = this.state.workInfo.workPlaces.slice()

        company[count].date = e.target.value

        this.setState({
            workPlaces: company
        })
    }

    positionTitleHandle = (e, count) => {

        const company = this.state.workInfo.workPlaces.slice()

        company[count].positionTitle = e.target.value

        this.setState({
            workPlaces: company
        })
    }

    positionTasksHandle = (e, count) => {

        const company = this.state.workInfo.workPlaces.slice()

        company[count].mainTasks = e.target.value

        this.setState({
            workPlaces: company
        })
    }

    deleteEducationHandle = (e, count) => {
        e.preventDefault()

        const educationList = this.state.educationInfo.educations
        educationList.splice(count, 1)

        this.setState({
             educationInfo: {
                count: this.state.educationInfo.count - 1,
                educations: educationList
             }
        })
    }

    deleteWorkHandle = (e, count) => {
        e.preventDefault()

        const workList = this.state.workInfo.workPlaces
        workList.splice(count,1)

        this.setState({
            workInfo: {
                workCount: this.state.workInfo.workCount - 1,
                workPlaces: workList
            }
        })
    }

    handleEducationalExperience = (e) => {
        e.preventDefault();
        this.setState({
            educationInfo: {
                count: this.state.educationInfo.count + 1,
                educations: this.state.educationInfo.educations.concat([
                    {
                        schoolName: "",
                        titleOfStudy: "",
                        dateOfStudy: ""
                    }
                ])
            }
        })
    }

    handleWorkExperience = (e) => {
        e.preventDefault();
        this.setState({
            workInfo: {
                workCount: this.state.workInfo.workCount + 1,
                workPlaces: this.state.workInfo.workPlaces.concat([
                    {
                        companyName: "",
                        positionTitle: "",
                        mainTasks: "",
                        date: ""
                    }
                ])
            }
        })
    }

    createEducationalExperience = () => {

        const educationFields = []

        for(let i = 1; i <= this.state.educationInfo.count; i += 1){
            const educationField = <div className='card'>
                <input type='text' id='nameFirstInput' value={this.state.educationInfo.educations[i-1].schoolName} onChange={(e) => {this.schoolInputHandle(e, i - 1)}} placeholder='School Name'></input>
                <input type='text' id='titleStudyInput' value={this.state.educationInfo.educations[i-1].titleOfStudy} onChange={(e) => {this.titleStudyInputHandle(e, i-1)}} placeholder='Title of Study'></input>
                <input type='text' id='dateStudyInput' value={this.state.educationInfo.educations[i-1].dateOfStudy} onChange={(e) => {this.dateStudyHandle(e, i-1)}} placeholder='Date of Study'></input>
                <input type='text' id='locationStudyInput' value={this.state.educationInfo.educations[i-1].location} onChange={(e) => {this.schoolLocationHandle(e, i-1)}} placeholder='Location Ex. Waterloo, Ontario'></input>
                <button onClick={(e) => {this.deleteEducationHandle(e, i-1)}}>Delete</button>
                <hr></hr>
            </div>

            educationFields.push(educationField)
        }

        return educationFields
    }

    createWorkExperience = () => {

        const workFields = []

        for(let i = 1; i <= this.state.workInfo.workCount; i +=1){
            const workField = <div className='card'>
                <input type='text' id='companyName' value={this.state.workInfo.workPlaces[i-1].companyName} onChange={(e) => {this.companyNameHandle(e, i-1)}}  placeholder='Company Name'></input>
                <input type='text' id='positionName' value={this.state.workInfo.workPlaces[i-1].positionTitle} onChange={(e) => {this.positionTitleHandle(e, i-1)}} placeholder='Position Title'></input>
                <input type='text' id='dateOfWork' value={this.state.workInfo.workPlaces[i-1].date} onChange={(e) => {this.workDurationHandle(e, i-1)}}  placeholder='Duration of Employment ex. Jan 2020 - May 2023'></input>
                <textarea id='positionTasks' value={this.state.workInfo.workPlaces[i-1].mainTasks} onChange={(e) => {this.positionTasksHandle(e, i-1)}} placeholder='Main tasks...'></textarea>
                <button onClick={(e) => {this.deleteWorkHandle(e, i-1)}}>Delete</button>
                <hr></hr>
            </div>

            workFields.push(workField)
        }

        return workFields
    }

    
    render(){
        const {generalInfo, educationInfo, workInfo} = this.state
        const firstNameInputFunc = this.firstNameInputHandle
        const lastNameInputFunc = this.lastNameInputHandle
        const emailInputFunc = this.emailInputHandle
        const phoneInputFunc = this.phoneInputHandle
        const createEduField = this.handleEducationalExperience

        return(
            <div className='mainBody'>
                <form className='mainCard'>
                    <div className='card'>
                        <h3>Personal Information</h3>
                        <input type='text' id='nameFirstInput' value={generalInfo.name.first} onChange={firstNameInputFunc} placeholder='First Name'></input>
                        <input type='text' id='nameLastInput' value={generalInfo.name.last} onChange={lastNameInputFunc} placeholder='Last Name'></input>
                        <input type='text' id='emailInput' value={generalInfo.email} onChange={emailInputFunc} placeholder='E-mail Address'></input>
                        <input type='text' id='phoneInput' value={generalInfo.phoneNumber} onChange={phoneInputFunc} placeholder='Phone Number'></input>
                    </div>
                    <div className='card'>
                        <h3>Educational Experience</h3>
                        {this.createEducationalExperience()}
                        <button onClick={createEduField}>Add Education</button>
                    </div>
                    <div className='card'>
                        <h3>Work Experience</h3>
                        {this.createWorkExperience()}
                        <button onClick={this.handleWorkExperience}>Add Work Experience</button>
                    </div>
                </form>
                <Resume information={this.state}></Resume>
            </div>
        )
    }
}

export default Form