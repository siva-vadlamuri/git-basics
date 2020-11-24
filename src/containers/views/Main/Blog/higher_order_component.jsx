import React, {Component} from 'react';

export default function Hoc(param1,Blog){
    return class extends Component{
        render(){
            return(
                <div>
                    <Blog heading={param1}/>
                </div>
            )
        }
    }
}