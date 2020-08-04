import React from 'react'
import Item from './Item'
import styled from 'styled-components'

const Container = styled.div`
	position: fixed;
	right: 50px;
	top: 50%;
	transform: translateY(-50%);
`

export default () => {
	return (
		<Container>
			<Item>About Me</Item>
			<Item>Projects</Item>
			<Item>Contact</Item>
		</Container>
	)
}
