import React, { Component, PropTypes } from 'react'


export default class ListCharacterRow extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<li className="characterRow">
				<div className="characterContainer">
					<span className="character-image"><img src={ "http://skylanders.com/content/dam/atvi/skylanders/base/characters-v2/toy/" + this.props.character.id + ".png"}/></span>
					<span>{this.props.character.game}</span>
					<span>{this.props.character.id}</span>
				</div>
			</li>
		)
	}
}