import React from 'react';

const Buttons = () => {

    return (
        <>
            <div className="col-md-1 col-sm-1">
                <button type="button" className="btn btn-outline-warning">Edit</button>
            </div>
            <div className="col-md-2 col-sm-2">
                <button type="button" className="btn btn-outline-danger">Delete</button>
            </div>            
        </>
    );
};
export default Buttons;