import React from 'react';
import LocationItem from './LocationItem';

export default class LocationList extends React.Component{

	render(){

		var self = this;

		var locations = this.props.locations.map(function(l){

			var active = self.props.activeLocationAddress === l.address;

			// Notice that we are passing the onClick callback of this
			// LocationList to each LocationItem.

			return <LocationItem address={l.address} timestamp={l.timestamp} 
					active={active} onClick={self.props.onClick} />
		});

		if(!locations.length){
			return null;
		}

		return (
			<div className="list-group col-xs-12 col-md-6 col-md-offset-3">
				<span className="list-group-item active">Saved Locations</span>
				{locations}
			</div>
		)

	}

}