

import React from 'react';
import axios from 'axios';

class Mark extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div className="App">
        <p></p>
        <table className="App">
          <tr>
            <td>Assignment No.</td>
            <td>Total Marks</td>
            <td>Obtained Marks</td>
          </tr>
        </table>
      </div>
    )
  }
}


export default Mark;