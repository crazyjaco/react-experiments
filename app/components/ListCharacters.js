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
			if( '' === character.nameHonorific || undefined === character.nameHonorific) {
				return <li key={character.id}> {character.nameBase} </li>		
			} else {
				return <li key={character.id}> {character.nameHonorific + ' ' + character.nameBase} </li>
			}
		})
		return(
			<ul className="characterList">
				{getCharacters}				
			</ul>
		)
	}
}