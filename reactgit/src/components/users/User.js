import React, { Fragment, useEffect } from 'react';
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'
import { Link } from 'react-router-dom'

const User = (props) => {

    useEffect(() => {
        props.getUser(props.match.params.login);
        props.getUserRepos(props.match.params.login);
        // eslint-disable-next-line
    }, []);

    if (props.loading){
        return <Spinner />
    }

    return (
        <Fragment>
            <Link to='/' className='btn btn-light'>
                Back To Search
            </Link>
            Hireable: {' '}
            {props.user.hireable ? <i className='fas fa-check text-success'/> : <i className='fas fa-times-circle text-danger'/>}
            <div className="card grid-2">
                <div className="all-center">
                    <img src={props.user.avatar_url} alt="avatar" className="round-img" style={{ width: '150px' }}/>
                    <h1>{props.user.name}</h1>
                    <p>Location: {props.user.location}</p>
                </div>
                <div>
                    {props.user.bio &&
                    <Fragment>
                        <h3>Bio</h3>
                        <p>{props.user.bio}</p>
                    </Fragment>}
                    <a href={props.user.html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
                    <ul>
                        <li>
                            <strong>Username:</strong> {props.user.login}
                        </li>
                        <li>
                            <strong>Company:</strong> {props.user.company}
                        </li>
                        <li>
                            <strong>Blog:</strong> {props.user.blog}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers: {props.user.followers}</div>
                <div className="badge badge-success">Following: {props.user.following}</div>
                <div className="badge badge-light">Public Repos: {props.user.public_repos}</div>
                <div className="badge badge-dark">Public Gists: {props.user.public_gists}</div>
            </div>

            <Repos repos={props.repos}/>
        </Fragment>
    );
};

export default User;

