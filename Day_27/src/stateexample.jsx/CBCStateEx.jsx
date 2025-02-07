// import React, { Component } from 'react'

// class CBCStateEx extends Component {
//     constructor(){
//         super();
//         this.state={
//             university:"MRU"
//         }
//     }
//     changeName=()=>{
//         this.setState({university:"MRUH"});
//     }
//   render() {
//     console.log(this);
//     return (
//       <div>
//         <p style={{textAlign:'center'}}>CBCStateEx</p>
//         <h1>{this.state.university}</h1>
//         <button onClick={this.changeName}>Change Name</button>
//       </div>
//     )
//   }
// }
// export default CBCStateEx;


// import React, { Component } from 'react'

// class CBCStateEx extends Component {
//     constructor(){
//         super();
//         this.state={
//             university:"MRU"
//         }
//     }
//     changeName=()=>{
//         this.setState({university:"MRUH"});
//     }
//   render() {
//     console.log(this);
//     return (
//       <div>
//         <p style={{textAlign:'center'}}>CBCStateEx</p>
//         <h1>{this.state.university}</h1>
//         <button onClick={this.changeName}>Change Name</button>
//       </div>
//     )
//   }
// }
// export default CBCStateEx;

import React, { Component } from 'react';
import "./Style.css";

class CBCStateEx extends Component {
  constructor() {
    super();
    this.state = {
      Count: 0
    };
  }

  increment = () => {
    this.setState({ Count: this.state.Count + 1 });
  }

  decrement = () => {
    this.setState({ Count: this.state.Count - 1 });
  }

  reset = () => {
    this.setState({ Count: 0 });
  }

  render() {
    console.log(this);
    return (
      <div className="stateexm">
        <h1>{this.state.Count}</h1>
        <div className="btn">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default CBCStateEx;