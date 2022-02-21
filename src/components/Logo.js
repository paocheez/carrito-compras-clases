import { Component } from "react";

const styles={
    logo:{
        fontWeight: "700",
        fontSize: "2rem",
        color: "#f7d3c3",
        textShadow: "2px 2px 2px #5D5B5B"
    }
}

class Logo extends Component{
    render(){
        return(
            <div style={styles.logo}>
                Flowers Shop
            </div>
        )
    }
}

export default Logo;