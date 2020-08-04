import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	white-space: nowrap;
	cursor: pointer;
	font-size: 75%;
`

export default ({children}) => {
	return <Container>{children}</Container>
}
