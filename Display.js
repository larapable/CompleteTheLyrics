import React from 'react';

let messages = [];
let renders = [];
let currChild = '';
let currMess = '';

class Display extends React.Component {

  render() {
  const {message, bgColor, child} = this.props;

  if(!!message || !!currMess) {
    currMess = message;
    if(currChild !== child) {
      messages.push({message: message, bgColor: bgColor});
      currChild = child;
    } else {
      messages[messages.length - 1].message = message;
    }
    renders = [];
    messages.forEach(messObj => {
      renders.push(
        <div><p style={{height:'40px',weight:'50px',borderRadius:'10px',display: 'flex',justifyContent: 'flex-start',
                        paddingLeft: '10px',alignItems: 'center',backgroundColor: messObj.bgColor}}>{messObj.message}</p></div>
      );
    });
  }

  return <>
    <div style={{padding: 30, margin: 20, border : '1px solid'}}>{renders}</div>

  </>
}
}

export default Display;
