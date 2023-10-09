import React from 'react';
import { Grid } from '@mui/material';
import Display from './Display';

class TheSecond extends React.Component {
  state = {
    message: ""
  };

  onChange = event => {
    this.setState({message: event.target.value});
  };
  
  render() {
    
const {message} = this.state;

return (
<Grid>
<div paddingBottom='10px' style={{ display: 'flex', flexDirection: 'column'}}>
      <div paddingBottom='10px'>
      <input
          type='text'
          value={message}
          onChange={this.onChange}
          style={{ width: '800px', height: '40px',border:'3px solid black',borderRadius:'6px' }}
        />
    </div>
    </div>
    <Display {...this.props} message={message} bgColor="yellowgreen" child="second" />
    </Grid>
);
  }
}

export default TheSecond;
