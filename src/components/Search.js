import React from 'react';

export default class Search extends React.Component{
	constructor(props) {
    	super(props);

    	this.state = {
    		value: ''
    	};

	}

	handleSubmit(event){
		
		event.preventDefault();
		
		// When the form is submitted, call the onSearch callback that is passed to the component

		this.props.onSearch(this.state.value);

		// Unfocus the text input field
		//this.getDOMNode().querySelector('input').blur();
	}

	render() {

		return (
			<form id="geocoding_form" className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
				<div className="form-group">
					<div className="col-xs-12 col-md-6 col-md-offset-3">
						<div className="input-group">
							<input type="text" className="form-control" id="address" placeholder="Find a location..." 
							value={this.state.value}  onChange={(ev) => {this.setState({value: ev.target.value});}} />
							<span className="input-group-btn">
								<span className="glyphicon glyphicon-search" aria-hidden="true"></span>
							</span>
						</div>
					</div>
				</div>
			</form>
		);

	}
}