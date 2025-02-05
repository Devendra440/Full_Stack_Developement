// // import React from 'react';
// // import Navbar from './Components/Navbar';
// // import Main from './Components/Main';
// // import Sidebar1 from './Components/Sidebar1';
// // import Sidebar2 from './Components/Sidebar2';
// // import Footer from './Components/Footer';
// // import './Components/Style.css';

// // function App() {
// //   return (
// //     <div className='app'>
// //       <Navbar/>
// //       <Main/>
// //       <div className='side'>
// //         <Sidebar1/>
// //         <Sidebar2/>
// //       </div>
// //       <Footer/>
// //     </div>
// //   );
// // }

// // export default App;


// // notes impo

// //
// //
// //
// import React, { Component } from "react";
// import CBCExample from "./PropsExample/CBCExample";

// export default class App extends Component {
//   render() {
//     return (
//       <CBCExample
//         username="Uday"
//         age={18}
//         hobbies={["Playing", "Eating", "Sleeping"]}
//         address={{ city: "Hyd", area: "Miyapur" }}
//         isMarried={false}
//         sendFun={() => alert("poo ra pukka")}
//       />
//     );
//   }
// }

import React from "react";
import SubChildProps from "./PropsExample/SubChildProps";
import Propschildrenex from "./PropsExample/PropsChildrenex";

const App = () => {
  return (
    <div>
      <Propschildrenex username="Uday" company="Meta">
      <h1>This data  is passing as a props to child components </h1>
      <SubChildProps/>
      </Propschildrenex>
  </div>
  )
}
export default App;