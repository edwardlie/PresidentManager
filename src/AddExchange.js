import React, { Component } from 'react';

class AddExchange extends Component {
	constructor(props){
		super(props);

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event){
		event.preventDefault();
		this.props.onAdd(this.nameInput.value, this.lastnameInput.value);
		this.nameInput.value = '';
		this.lastnameInput.value = '';
	}
	render() {
    return (
    	<form onSubmit={this.onSubmit}>
    		<h3>Add Exchange</h3>
    		<input placeholder="Name" ref={nameInput => this.nameInput = nameInput} />
    		<input placeholder="Lastname" ref={lastnameInput => this.lastnameInput = lastnameInput} />
    		<button>Add</button>
    		<hr />
         </form>
    );
  }
}
export default AddExchange;
