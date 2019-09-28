import React from 'react';


const Search = (props) =>{
    const onSubmit = (e) =>{
        e.preventDefault();
        if (e.target.text.value === '')
        {
            props.setAlert('Please enter something', 'light');
        }
        else
        {
            props.searchUsers(e.target.text.value);
            e.target.text.value = '';
        }
    };

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input type="text" name="text" placeholder="Search Users..."/>
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>
            </form>
        </div>
    );
};

export default Search;