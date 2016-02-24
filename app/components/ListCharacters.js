import React, { Component, PropTypes } from 'react'
import ListCharacterRow from './ListCharacterRow'


export default class ListCharacters extends React.Component {
	constructor(props) {
		super(props)
		this.state = {path: props.path, characters: []}
		jQuery.getJSON('../data/characters.json', function( data ){
			this.setState({characters: data.characters})
			console.log('characters: ', this.state);
		}.bind(this))
	}

	// Sample setter. Probably won't be used in this context.
	// setCharacters(newCharacterList) {
	// 	this.setState({characters: newCharacterList})
	// }

	render() {
		const characters = this.state.characters
		console.log( 'render', this.state)
		const getCharacters = characters.map((character, index) => {
			console.log('getCharacters: ', character)
			return <ListCharacterRow character={character} />
		})
		return(
			<ul className="characterList">
				{getCharacters}				
			</ul>
		)
	}
}