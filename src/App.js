import React, {useState} from 'react'
import Landing from './Components/Landing'
import Project from './Components/Project'
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
    }
	body {
		max-width: 1024px;
		margin: 0 auto;
		overflow: ${({unScroll}) => (unScroll ? 'hidden' : '')};
    }
`

const App = () => {
	const [project, setProject] = useState(-1)
	return (
		<>
			<GlobalStyle unScroll={project > -1} />
			<Landing setProject={setProject} />
			{project > -1 && (
				<Project project={project} setProject={setProject} />
			)}
		</>
	)
}

export default App
