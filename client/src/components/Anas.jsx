import React, { Fragment } from 'react'

export const Anas = () => {
    return (
        <Fragment>
            <div className="container">
                <form action=""
                    style={{ display: "flex", flexFlow: "column", justifyContent: "center", alignItems: "center"  , margin :"50px"}}>
                    <label htmlFor="">
                        <span>Old Password</span>
                        <input type="password" />
                    </label>
                    <label htmlFor="">
                        <span>new Password</span>
                        <input type="password" />
                    </label>
                    <label htmlFor="">
                        <span>repeat Password</span>
                        <input type="password" />
                    </label>
                    <button > submit</button>
                </form>
            </div>
        </Fragment>
    )
}

