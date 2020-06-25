import React, { Component } from 'react'

class Item extends Component{
    constructor(props){
        super(props);

        this.state={
            item:props.item,
            isCart:props.isCart
        }
    }

    add=()=>{
        this.props.addToCart(this.state.item);
    }

    render(){
        return(
            <React.Fragment>
                <h1>{this.state.item.name}</h1>
                <p>Price:{this.state.item.price}</p>
                {
                    (this.state.isCart==true) ?
                    (<button>Remove</button>) :
                    (<button onClick={this.add}>Add to Cart</button>)
                }
                
            </React.Fragment>
        )
    }
}

export default Item;