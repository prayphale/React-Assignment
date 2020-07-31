import React, { Component } from 'react';
import {connect} from 'react-redux';


const Search = (props: any) => {

    function onHandleChange (e)  {
        console.log(e.target.value);
        let {dispatch} = e.props;
        dispatch({type: 'UPDATE_USERNAME', username: e.target.value})

    }

    return (
        <>
             <nav className="navbar navbar-expand-sm bg-secondary text-white navbar-dark border-bottom b=20 mb-5">
                <div className="container">
                <div className="row">  
                    <div className="form-group has-search m-3">
                        <span className="fa fa-search form-control-feedback"></span>
                        <input type="text" className="form-control h-100 w-100" placeholder="Find a member…" onChange={onHandleChange} value={props.user}/>
                    </div>    
                </div>
                </div>
            </nav>

        </>
    );    
};

export default Search;