import React from 'react'

function checkParams(props) {
  if (props.match.params.test === 'test') {
    return 'we got it boys!!!';
  }
  else {
    return 'no dice';
  }
}


export default function TestComponent(props) {

    return (
      <div>
        {console.log(props)}
         {checkParams(props)}
      </div>
    );
}
