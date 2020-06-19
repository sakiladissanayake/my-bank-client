import React, {Component} from 'react';
import { css } from "@emotion/core";
import PropagateLoader from "react-spinners/PropagateLoader";
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmployeeCard from './EmployeeCard';

import { getAllUsers, logOut } from '../actions';


const override = css` 
display: block;
margin: 0 auto;
border-color: black;
position: fixed; 
top: 50%;
left: 50%; 
transform: translate(-50%, -50%);
`;


class Home extends Component {

    componentDidMount() {
        this.props.getAllUsers();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.hasError){
          toast.error("Error Occured While Loading...");
        } 
      }

    logout = () => {
        this.props.logout();
        this.props.history.push('/login');
    }

    render() {
        const {hasError, loading, data}= this.props;
        if(loading) {
            return (
                <div className="sweet-loading">
                  <PropagateLoader
                    css={override}
                    size={25}
                    color={"#007bff"}
                    loading={loading}
                  />
                </div>
              );
        } else if(hasError) {
            return <h1>ss</h1>
        }
        else if(data) {
            return(
                <div>
                     <button type="button" className="btn-logout" onClick={this.logout}>
                  LogOut
                </button>
             
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        {data.map(item => 
                             <div className="col-md-4" key={item.empId}>
                             <EmployeeCard 
                             empPhoto={item.empPhoto}
                             empName={item.empName} 
                             empEmail={item.empEmail} 
                             empBankName={item.bankName} 
                             empBranchName={item.branchName}
                             />
                         </div>
                            )}
                    </div>
                    <ToastContainer />
                </div>
                </div>
            );
        }
      return null;
    }
}

function mapState(state) {
    return { loading: state.loading, hasError: state.hasError, data: state.data };
}

const actionCreators = {
    getAllUsers: getAllUsers,
    logout: logOut
}
export default connect(mapState, actionCreators)(Home);;