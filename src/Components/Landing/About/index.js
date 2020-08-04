import React from 'react'
import SectionName from '../../Shared/SectionName'
import styled from 'styled-components'
import model from '../../../model'
import Skillbox from './SkillBox'

const Container = styled.div`
	padding: 4rem 2rem;
`

const badgify = text => {
	let matches = text.match(/\[(.+?)\]/g)
	console.log('matches', matches)
	if (matches)
		matches.forEach(
			match =>
				(text = text.replace(
					console.log(
						'text',
						match.substr(1, match.length - 2)
					),
					match,
					`<span style="background-color:red">${match.substr(
						1,
						match.length - 2
					)}</span>`
				))
		)
	return text
}
export default () => {
	return (
		<Container>
			<SectionName>About me</SectionName>
			{model.about.map(([title, body], i) => {
				console.log(title, badgify(body), i)
				return (
					<Skillbox
						title={title}
						description={body}
						id={i}
					/>
				)
			})}
		</Container>
	)
}

// class='badge theme_dark text_01
