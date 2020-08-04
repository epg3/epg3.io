import React from 'react'
import Introduction from '../Shared/Introduction'
import MainPic from './MainPic'
import Contact from './Contact'
import Projects from './Projects/'
import Footer from './Footer'
import Tools from './About/'
import Menu from './Menu/'
import styled from 'styled-components'

const Container = styled.img`
	padding: 4rem 2rem;
`

const Image = styled.img`
	max-width: 40%;
`

export default ({setProject}) => {
	return (
		<div>
			<br />
			<br />
			<br />
			<Image src={`./projects/I am Erika/Hola.png`} />
			<br />
			<MainPic
				title='I am Erika'
				description='Data visualization advocate, passionate for insightful data analysis.'
				image='Erika.png'
			/>
			<Tools />
			<Projects setProject={setProject} />
			<Contact />
			<Footer />
			<Menu />
		</div>
	)
}

/*<Image
	src={require('../../projects/I am Erika/Hola.png')}
/>
*/
