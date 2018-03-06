import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

	// constructor() {
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this);
	// }


	goToStore(e) {
		e.preventDefault();
		console.log('You changed the url');

		// first grab text from input
		const storeId = this.storeInput.value;
		console.log(`going to ${storeId}`)

		//transition from / to store/:storeID
		this.context.router.transitionTo(`/store/${storeId}`)
	}

	render() {
		return(
			// normal js comment
			<form className="store-selector" onSubmit={this.goToStore.bind(this)}> {/* Alternative --> { (e) => this.goToStore(e) } */}
				{ /* jsx comment */}
				<h2>Please enter a store</h2>
				<input type="text" required placeholder="store name" defaultValue={getFunName()} ref={ (input) => { this.storeInput = input } } />
			<button type="submit">visit store &rarr;</button>
			</form>

		)
	}
}

// Accessing React Router using context
StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;
