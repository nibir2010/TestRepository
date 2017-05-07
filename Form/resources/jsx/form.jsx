import React from 'react';

export default class Form extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name:'',
			phoneNumber:'',
			email:'',
			address:''
		}
	}
	getName(){
		this.setState({
			name:this.refs.name.getDOMNode().value
		})
	}
	getPhoneNumber(){
		this.setState({
			phoneNumber:this.refs.phoneNumber.getDOMNode().value
		})
	}
	getEmail(){
		this.setState({
			email:this.refs.email.getDOMNode().value
		})
	}
	getAddress(){
		this.setState({
			address:this.refs.address.getDOMNode().value
		})
	}

    render() {
    	debugger
        return (
        	<div className="row">
	        	<div className="col-sm-6">
	            <div className="input-group input-group-lg">
					  <span className="input-group-addon" id="sizing-addon1">Name</span>
					  <input type="text" className="form-control" placeholder="Username" aria-describedby="sizing-addon1" ref="name" onKeyUp={this.getName.bind(this,null)}/>
					</div>

					<div className="input-group input-group-lg">
					  <span className="input-group-addon" id="sizing-addon2">Phone Number</span>
					  <input type="text" className="form-control" placeholder="phone number" aria-describedby="sizing-addon2" ref="phoneNumber" onKeyUp={this.getPhoneNumber.bind(this,null)}/>
					</div>

					<div className="input-group input-group-lg">
					  <span className="input-group-addon" id="sizing-addon3">E-Mail</span>
					  <input type="email" className="form-control" placeholder="E-Mail" aria-describedby="sizing-addon3" ref="email" onKeyUp={this.getEmail.bind(this,null)}/>
					</div>

					<div className="input-group input-group-lg">
					  <span className="input-group-addon" id="sizing-addon3">Address</span>
					  <input type="text" className="form-control" placeholder="address" aria-describedby="sizing-addon3" ref="address" onKeyUp={this.getAddress.bind(this,null)}/>
					</div>
				</div>
				<div className="col-sm-6">
					<table className = "table">
					   <caption>Details</caption>
					   
					   <thead>
					      <tr>
					         <th>Name</th>
					         <th>Phone Number</th>
					         <th>E-Mail</th>
					         <th>Address</th>
					      </tr>
					   </thead>
					   
					   <tbody>
					      <tr>
					         <td>{this.state.name}</td>
					         <td>{this.state.phoneNumber}</td>
					         <td>{this.state.email}</td>
					         <td>{this.state.address}</td>
					      </tr>
					   </tbody>
						
					</table>
				</div>
			</div>
        );
    }

};

