import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import TableRow from './TableRow';

export default class Index extends Component {

	constructor(props) {
		super(props);
		this.state = { business: [] };
		this.delete = this.delete.bind(this);
	}
	componentDidMount() {
		axios.get('http://localhost:4040/business')
			.then(response => {
				this.setState({ business: response.data });
			})
			.catch(function (error) {
				console.log(error);
			})
	}
	// tabRow() {
	// 	return this.state.business.map(function (object, i) {
	// 		return <TableRow obj={object} key={i} />;
	// 	});
	// }

	delete(_id, object) {
		console.log(_id);

		// remove from local state
		const isNotId = object => object._id !== _id;
		const updatedBusiness = this.state.business.filter(isNotId);
		this.setState({ business: updatedBusiness });

		// make delete request to the backend
		axios.get('http://localhost:4040/business/delete/' + _id)
			.then(console.log(_id))
			.catch(err => console.log(err))
	}

	render() {
		return (
			<div>
				<h3 align="center">Business List</h3>
				<table className="table table-striped" style={{ marginTop: 20 }}>
					<thead>
						<tr>
							<th>Person</th>
							<th>Business</th>
							<th>GST Number</th>
							<th colSpan="2">Action</th>
						</tr>
					</thead>
					<tbody>
						{this.state.business.map(object => (
							<tr key={object._id}>
								<td>
									{object.person_name}
								</td>
								<td>
									{object.business_name}
								</td>
								<td>
									{object.business_gst_number}
								</td>
								<td>
									<Link to={"/singleelement/" + object._id} className="btn btn-primary">View</Link>
								</td>
								<td>
									<Link to={"/edit/" + object._id} className="btn btn-primary">Edit</Link>
								</td>
								<td>
									<button onClick={() => this.delete(object._id, object)} className="btn btn-danger">Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div >
		);
	}
}