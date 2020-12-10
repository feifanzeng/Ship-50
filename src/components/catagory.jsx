
import React from "react";

const Catagory = (props) => {
    const { label } = props;

    return(
        <div style={{ background:"#403294", borderRadius: "3px", height: "20px", width: "105px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "33px", marginLeft: "172px"}}>
            <p style={{color: "white", fontSize: "13px"}}>
                {label}
            </p>
        </div>
    );
}
  
export default Catagory;