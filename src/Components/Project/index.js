import React from 'react'
import Introduction from '../Shared/Introduction'
import Section from './Section'
import Close from './Close'
import model from '../../model'

import styled from 'styled-components'

const Fixed = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	overflow-x: hidden;
	background: white;
`

const Centered = styled.div`
	max-width: 1024px;
	margin: 0 auto;
`

export default ({project, setProject}) => {
	const [name, description, thumbnail, content] = model.projects[
		project
	]
	return (
		<Fixed>
			<Centered>
				{content.map(([image, title, description], i) => {
					if (i == 0) {
						return (
							<Introduction
								key={i}
								title={title}
								description={description}
								image={image}
							/>
						)
					} else {
						return (
							<Section
								key={i}
								title={title}
								description={description}
								image={`/${name}/${image}`}
							/>
						)
					}
				})}

				<Close onClick={e => setProject(-1)} />
			</Centered>
		</Fixed>
	)
}
