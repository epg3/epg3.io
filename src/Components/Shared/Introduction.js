import React from 'react'
import Header from './Header'
import Description from './Description'
import styled from 'styled-components'

const Container = styled.div`
	padding: 0rem 4rem;
	display: inline-block;
`

const Image = styled.img`
	max-width: 50%;
	align: right;
	transform: translate(60%, -20%);
`

export default ({title, description, image}) => {
	console.log(`./projects/${title}/${image}`)
	return (
		<Container>
			<Header>{title}</Header>
			<Description>{description}</Description>
			<Image src={`./projects/${title}/${image}`} />
		</Container>
	)
}
