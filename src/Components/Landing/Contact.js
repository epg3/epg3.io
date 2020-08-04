import React from 'react'
import SectionName from '../Shared/SectionName'
import styled from 'styled-components'

const Container = styled.div`
	padding: 4rem 2rem;
`

const Image = styled.img`
	max-width: 5%;
	padding: 0rem 1rem;
	cursor: pointer;
`
export default () => {
	return (
		<Container>
			<SectionName>Contact</SectionName>
			<p>epgarces3@gmail.com</p>
			<br />
			<br />
			<ul>
				<a href='https://twitter.com/epgarces'>
					<Image
						src={`./projects/I am Erika/twitter.png`}
					/>
				</a>
				<a href='https://www.linkedin.com/in/erika-garces/'>
					<Image
						src={`./projects/I am Erika/linkedin-sign.png`}
					/>
				</a>
				<a href='https://github.com/epg3'>
					<Image
						src={`./projects/I am Erika/github-image.png`}
					/>
				</a>
			</ul>
		</Container>
	)
}
