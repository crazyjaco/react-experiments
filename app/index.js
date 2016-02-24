import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import ListCharacters from './components/ListCharacters'

render(
	<ListCharacters path="data/characters.json" />
	,
	document.getElementById('character-list')
)