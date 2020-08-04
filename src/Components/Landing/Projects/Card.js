import React from 'react'
import Description from '../../Shared/Description'
import Title from '../../Shared/Title'
import styled from 'styled-components'

const Container = styled.div`
	display: inline-block;
	border-radius: 15px;
	max-width: 200px;
	background: white;
	cursor: pointer;
	margin: 15px;
	box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	bottom: 42.61%;
`

const Thumbnail = styled.img`
	border-radius: 15px 15px 2px 2px;
	width: 100%;
`
const Centered = styled.div`
	padding: 1rem 1rem;
	text-align: center;
`

export default ({title, description, image, setProject, id}) => {
	return (
		<Container onClick={() => setProject(id)}>
			<Thumbnail src={`./projects/${title}/${image}`} />
			<Title>{title}</Title>
			<Centered>
				<Description>{description}</Description>
			</Centered>
		</Container>
	)
}

//src={image}

// `./projects/${name}/${thumbnail}`
