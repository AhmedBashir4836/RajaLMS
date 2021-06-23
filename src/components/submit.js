import React from 'react';
import axios from 'axios';

class Submit extends React.Component {
  state = {
    name:'',
    rollno:'',
    section:'',
    subject:'',
    // Initially, no file is selected
    selectedFile: null
    };

    // On file select (from the pop up)
	onFileChange = event => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
	};

  //Set Name
  setName = event=>{
    this.setState({name:event.target.value});
  }

  //Set Roll No
  setRoll = event=>{
    this.setState({rollno:event.target.value});
  }

  //Set Section
  setSection = event=>{
    this.setState({section:event.target.value});
  }

  //Set Subject
  setSubject = event=>{
    this.setState({subject:event.target.value});
  }



  // On file upload (click the upload button)
	onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();
    
    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
      );

// Details of the uploaded file
  console.log(this.state.selectedFile);
// Request made to the backend api
// Send formData object
  axios.post("/", formData,{
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then((response)=>{
      console.log("File uploaded successfully");
    }).catch((error) => {
        console.log("File uploaded successfully");
    });
};

  render() {
    return (
      <div className="App">
        <p></p>
        <br></br>
        <hr/>
        <table>
        <tr>
          <td>Name</td>
          <td>Roll #</td>
          <td>Section</td>
          <td>Subject</td>
          <td>Assignment</td>
        </tr>
        <tr>
          <td>
            <input type="text" onChange={this.setName}/>
          </td>
          <td>
            <input type="text" onChange={this.setRoll}/>
          </td>
          <td>
            <input type="text" onChange={this.setSection}/>
          </td>
          <td>
            <input type="text" onChange={this.setSubject}/>
          </td>
          <td>
            <input type="file" onChange={this.onFileChange}/>
          </td>
          <td>
            <button onClick={this.onFileUpload}>
              Submit
            </button>
          </td>
        </tr>
      </table>
      </div>
      
    )
  }
}



export default Submit;