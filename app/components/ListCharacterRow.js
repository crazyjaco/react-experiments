import React, { Component, PropTypes } from 'react'


export default class ListCharacterRow extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<li className="characterRow">
				{this.props.id}
			</li>
		)
	}
}