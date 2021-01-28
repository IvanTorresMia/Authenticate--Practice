import React from 'react'

// This is the terminal conponent taking in some props
// We are passing in the user data from the api
const Terminal = ({userData, selected}) => {
    // ternery aporator that is used to determine weather or not 
    // all the data is selected and if not then just take the selected data.
    const selectedData = selected === "All" ? userData : userData[selected]
    const jsonCode = JSON.stringify(selectedData, null, 4) //this is the data that is being selected, we are adding some formatting. 

    // regular ol jsx for our component.
    return (
        <div className="window">
            <div className="title-bar">
                <div className="buttons">
                <div className="mac-btn close"/>
                <div className="mac-btn minimize"/>
                <div className="mac-btn zoom"/>
                </div>
                <p style={{ textAlign: "center", margin:0 }}>
                JSON-Termial
            </p>
            </div>
           <div className="content">
            <pre>{jsonCode}</pre>
           </div>
        </div>
    )
}

export default Terminal;