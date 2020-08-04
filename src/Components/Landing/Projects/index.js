import React from 'react'
import SectionName from '../../Shared/SectionName'
import Card from './Card'
import model from '../../../model'
import styled from 'styled-components'

const Container = styled.div`
	padding: 4rem 2rem;
`

export default ({setProject}) => {
	return (
		<Container>
			<SectionName>Projects</SectionName>
			{model.projects.map(
				([name, description, thumbnail, content], i) => {
					return (
						<Card
							key={i}
							title={name}
							description={description}
							image={thumbnail}
							setProject={setProject}
							id={i}
						/>
					)
				}
			)}
		</Container>
	)
}
// `./projects/${name}/${thumbnail}`
