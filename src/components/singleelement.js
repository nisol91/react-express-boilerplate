import React, { Component } from 'react';
import axios from 'axios';

export default class Singleelement extends Component {

	constructor(props) {
		super(props);

		this.state = {
			person_name: '',
			business_name: '',
			business_gst_number: '',
		}
	}
	componentDidMount() {
		axios.get('http://localhost:4040/business/singleelement/' + this.props.match.params.id)
			.then(response => {
				this.setState({
					person_name: response.data.person_name,
					business_name: response.data.business_name,
					business_gst_number: response.data.business_gst_number

				});
			})
			.catch(function (error) {
				console.log(error);
			})
	}


	render() {
		return (
			<div>
				Display single item
				<div>
					{this.state.person_name}

					{this.state.business_name}

					{this.state.business_gst_number}
				</div>


			</div >
		);
	}
}