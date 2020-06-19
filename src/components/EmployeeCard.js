import React from 'react';
import './EmployeeCard.scss';

const EmployeeCard = props => {
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.empPhoto} alt="Image1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="class-title">{props.empName}</h4>
                <h4 className="card-text text">{props.empEmail}</h4>
                <h4 className="card-text text">{props.empBankName}</h4>
                <h4 className="card-text text">{props.empBranchName}</h4>
            </div>
        </div>
    );
}

export default EmployeeCard;