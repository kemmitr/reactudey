import React from 'react'

const Alert = (props) =>{
    return(
        props.alert === true && (
            <div className={`alert alert-${props.alertBody.type}`}>
                <i className="fas fa-info-circle"></i> {props.alertBody.msg}
            </div>
        )
    )
};

export default Alert