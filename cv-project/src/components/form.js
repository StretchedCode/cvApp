import React, { Component } from 'react';


class Form extends Component{

    constructor(props){
        super(props)
    }

    render(){

        return(
            <form className='mainCard'>
                <div className='card'>Placeholder for general Information</div>
                <div className='card'>Placeholder for educational Information</div>
                <button>Add Education</button>
                <div className='card'>Placeholder for experiental Information</div>
                <button>Add Work Experience</button>
            </form>
        )
    }
}

export default Form