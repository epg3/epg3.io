import React from 'react'
import Description from '../../Shared/Description'
import Title from '../../Shared/Title'
import styled from 'styled-components'

const Container = styled.div`
	display: inline-block;
	border-radius: 15px;
	max-width: 300px;
	margin: 15px;
	transition: 0.3s;
	top: 42.61%;
	overflow: auto;
`

const Centered = styled.div`
	padding: 1rem 1rem;
	text-align: center;
`

export default ({title, description, id}) => {
	console.log(description)
	return (
		<Container>
			<Title>{title}</Title>
			<Centered>
				<Description>{description}</Description>
			</Centered>
		</Container>
	)
}
