import { Component } from "react";
import Producto from "./Producto";

const styles ={
    detallesCarro: {
        backgroundColor: "#fff",
        position: "absolute",
        marginTop: 30,
        boxShadow: "1px 5px 5px rgb(0,0,0,0.3",
        borderRadius: "5px",
        width: "300px",
        right: 50
    },
    ul:{
        margin: 0,
        padding: 0
    },
    producto:{
        listStyleType: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "25px 20px",
        borderBottom: "solid 1px #aaa"
    },
    total:{
        display: "flex",
        justifyContent: "flex-end",
        padding: "10px 20px",
        backgroundColor: "#f7d3c3",
        fontWeight: "bold"

    },
    amount:{
        paddingRight: "10px"
    }
}

class DetallesCarro extends Component{
    render(){
        const { carro } = this.props
        const totalPrice = carro.reduce((acc, curr) => acc + curr.price * curr.cantidad , 0);
        console.log(carro)
        return(
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {carro.map(x => 
                        <li style={styles.producto} key={x.name}>
                            <img alt={x.name} src={x.img} width="40" height="32" /> {x.name}
                            <span>{x.cantidad}</span>
                        </li>
                    )}
                </ul>
                <div style={styles.total}>
                    <span style={styles.amount}>Total: </span>             
                    ${totalPrice}.00 
                </div>
            </div>
        )
    }
}

export default DetallesCarro;