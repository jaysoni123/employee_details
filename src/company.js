import React from 'react'
import "./bootstrap.min.css"
import Header from "./header"
import Employee from "./employee"

const Company = () => {
    return(
        <React.Fragment>
            <Header />
            <Employee />
        </React.Fragment>
    );
}

export default Company;