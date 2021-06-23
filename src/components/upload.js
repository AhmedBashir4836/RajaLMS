import axios from 'axios';

import React from 'react';

class Upload extends React.Component {

	state = {
  startDate:'',
  endDate:'',
	// Initially, no file is selected
	selectedFile: null
	};
	
	// On file select (from the pop up)
	onFileChange = event => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
	};

  //Start Date
  onStartDate = event=>{
    this.setState({startDate:event.target.value});
  }

  //End Date
  onEndDate = event=>{
    this.setState({endDate:event.target.value});
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
	
	// File content to be displayed after
	// file upload is complete
	fileData = () => {
	
	if (this.state.selectedFile) {
		
		return (
		<div>
			<h2>File Details:</h2>
      
      <p>File Name: {this.state.selectedFile.name}</p>
      <p>File Type: {this.state.selectedFile.type}</p>
      <p>Last Modified:{" "}
      {this.state.selectedFile.lastModifiedDate.toDateString()}
      <p>Start Date:{this.state.startDate}</p>
      <p>End Date:{this.state.endDate}</p>
			</p>

		</div>
		);
	} else {
		return (
		<div>
			<br />
			<h4>Choose file before Pressing the Upload button</h4>
		</div>
		);
	}
	};
	
	render() {
	
	return (
		<div>
			<h1>Upload Assignment</h1>
      <p>Upload The Assignment</p>
			<div>
        <p>Start Date</p>
        <input type="Date" onChange={this.onStartDate}/>
        <p>End Date</p>
        <input type="Date" onChange={this.onEndDate}/>
        <p></p>
        <input type="file" onChange={this.onFileChange} />
        <p></p>
        <button onClick={this.onFileUpload}>Upload File</button>
			</div>
		{this.fileData()}
		</div>
	);
	}
}


export default Upload;
