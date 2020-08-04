import React from 'react'
import Title from '../Shared/Title'
import Description from '../Shared/Description'
import styled from 'styled-components'

const Image = styled.img`
	max-width: 50%;
`

export default ({title, description, image}) => {
	return (
		<div>
			<Title>{title}</Title>
			<Description>{description}</Description>
			<Image src={`./projects/${image}`} />
		</div>
	)
}
