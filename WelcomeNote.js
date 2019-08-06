import React from 'react';

class WelcomeNote extends React.Component {
   render() {
	  var myStyle = {
         fontSize: 25,
         color: '#FF0000'
      }
      return (
         <div style = {myStyle}>
            My 1st simple example on ReactJS 16.2.0
         </div>
      );
   }
}

export default WelcomeNote;