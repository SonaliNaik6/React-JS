
//  import React, { Component, createRef } from 'react';
//  import BULB from './Bulb/Bulb.jpg'

//  export default class App extends Component {

//     constructor() {
//         super();
//        this.state = {
//            pla: true
//         };
//        this.PlayRef = createRef();
//     }

//    ON = () => {
//        this.setState(prevState => ({ pla: !prevState.pla }), () => {
//            if (this.state.pla) {
//              this.PlayRef.current.play();
//           } else {
//               this.PlayRef.current.pause();
//             }
//        });
//      };

//      OFF = () => {
//       this.setState(prevState => ({ pla: !prevState.pla }), () => {
//            {
//              this.PlayRef.current.pause();
//            }
//       });
//     };

//     render() {
//          return (
//             <div>
//                 <video height="300px" width="300px" src={BULB} ref={this.PlayRef} />
//                 <button onClick={this.ON}>
//                     {this.state.pla ? 'Off' : 'On'}
//                 </button>
//                 <button onClick={this.OFF}>
//                     {this.state.pla ? 'On' : 'Off'}
//                 </button>
//              </div>
//          );
//      }
//  }



// import React from 'react'

// const App = () => {
//   let [bulb,setBulb]=useState(false)

//   this.state={
//     bulb:true
//   }


//   let bgColor=()=>{
//     if(changeOn==false){
//      document.body.style.backgroundColor = isOn ? 'yellow' : 'white';
//     }
//   }

//   return (
//     <div>
//       <h1>{bulb:}</h1>
//       <button onClick={changeOn}>ON</button>
//       <button onClick={changeOff}>Off</button>
//       </div>
//   )
// }

// export default App




// import React, { useState } from 'react';

// const App = () => {
//   const [bulb, setBulb] = useState(false);

//   const changeOn = () => {
//     setBulb(true);
//     bgColor(true);
//   };

//   const changeOff = () => {
//     setBulb(false);
//     bgColor(false);
//   };

//   const bgColor = (isOn) => {
//     document.body.style.backgroundColor = isOn ? 'yellow' : 'white';
//   };

//   return (
//     <div>
//       <h1>{bulb ? 'ON' : 'OFF'}</h1>
//       <button onClick={changeOn}>ON</button>
//       <button onClick={changeOff}>OF</button>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import bulbOn from "./BULB/bulb-on.jpg";  
// import bulbOff from "./BULB/bulb-off.png";

// const App = () => {
//   let [bulb, setBulb] = useState(false);

//   let changeOn = () => {
//     setBulb(true);
  
//   };

//   let changeOff = () => {
//     setBulb(false);
//   };

 
//   return (
//     <div>
//       <img  src={bulb ? bulbOn : bulbOff}  />
//       <br />
//       <button onClick={changeOn}>ON</button>
//       <button onClick={changeOff}>OFF</button>
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import bulbOn  from "./BULB/bulb-on.jpg"
import bulbOff from "./BULB/bulb-off.png"



const App = () => {

  let [bulb,setBulb]=useState(false)

  let changeOn=()=>{
    setBulb(true)
  }

  let changeOff=()=>{
    setBulb(false)
  }
  return (
    <div>
      <img src={bulb ? bulbOn : bulbOff} />
      <br/>
      <button onClick={changeOn}>ON</button>
      <button onClick={changeOff}>OFF</button>
    </div>
  )
}

export default App


 
 




