import React, { Component } from "react";


const Filter = ({ value, onChange }) => (
    <label>
        Filter by name
        <input
            type="text"
            value={value}
            onChange={onChange}
        />
        
    </label>
)


// class Filter extends Component{
    
//     changeFilter = e => {
//         this.setState({ filter: e.currentTarget.value });
//     }
    


// render() {
//     const { filter } = this.state;

//         return (
//             <label>
//                 Filter by name
//                 <input
//                     type="text"
//                     value={filter}
//                     onChange={this.changeFilter}
//                 />
                
//             </label>
//         );
//     }
// }

export default Filter;