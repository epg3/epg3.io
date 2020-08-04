import React from 'react'
import Header from '../Shared/Header'
import Description from '../Shared/Description'
import styled from 'styled-components'

const Container = styled.div`
	padding: 0rem 4rem;
	display: inline-block;
`

const Image = styled.img`
	max-width: 90%;
	align: right;
	transform: translate(50%, -15%);
`

export default ({title, description, image}) => {
	return (
		<Container>
			<Header>{title}</Header>
			<Description>{description}</Description>
			<Image src={`./projects/${title}/${image}`} />
		</Container>
	)
}
