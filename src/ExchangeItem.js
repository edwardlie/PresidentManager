import React, { Component } from 'react';

class ExchangeItem extends Component {
	constructor(props){
		super(props);

		this.state = {
			isEdit: false
		};

		this.onDelete = this.onDelete.bind(this);
		this.onEdit = this.onEdit.bind(this);
		this.onEditSubmit = this.onEditSubmit.bind(this);
	}

	onDelete(){
		const {onDelete, name} = this.props;
		onDelete(name);
	}

	onEdit(){
		this.setState({ isEdit: true});
	}

	onEditSubmit(event){
		event.preventDefault();
		this.props.onEditSubmit(this.nameInput.value, this.lastnameInput.value, this.props.name);
		this.setState({isEdit: false});
	}

	render() {
  		const { name, symbol} = this.props;

    return (
    	<div>
    	{
  			this.state.isEdit
  				?(
  					<form onSubmit={this.onEditSubmit}>
  					<input placeholder="Name" ref={nameInput => this.nameInput = nameInput} defaultValue={name}/>
    				<input placeholder="Lastname" ref={lastnameInput => this.lastnameInput = lastnameInput} defaultValue={symbol}/>
    				<button>Save</button>
  					</form>
  				)
  				:(
  					<div>
  						<span>{name}</span> 
                		{' | '}
                		<span>{symbol}</span>
                		{' | '}
                		<button onClick={this.onEdit}>Edit</button>
                		{' | '}
                		<button onClick={this.onDelete}>Delete</button>
                </div>
               )
  			}
        </div>
    );
  }
}

export default ExchangeItem;
