import React, {Fragment} from 'react'
import RepoItem from './RepoItem'

const Repos = (props) =>{
    return (
        <Fragment>
        {props.repos.map(repo => (
             <RepoItem key={repo.id} repo={repo} />
        ))}
        </Fragment>
    )
};

export default Repos