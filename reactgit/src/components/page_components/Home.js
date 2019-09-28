import React from 'react'
import Alert from '../layout/Alert';
import Users from '../users/Users';
import Search from '../users/Search';

const Home = (props) =>{
    return(
        <div>
            <Alert alert={props.alert} alertBody={props.alertBody}/>
            <Search searchUsers={props.searchUsers} setAlert={props.setAlert}/>
            <Users loading={props.loading} users={props.users} />
        </div>
    )
};

export default Home