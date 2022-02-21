import { Component } from 'react';

const styles = {
    title: {
        marginBottom: "30px",
        display: "flex",
        justifyContent:"center",
        letterSpacing: "5px",
        color: "#5D5B5B"
    }
}

class Title extends Component{
    render(){
        return(
            <h1 style={styles.title}>Especies disponibles</h1>
        )
    }
}

export default Title;