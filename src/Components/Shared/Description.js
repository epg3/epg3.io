import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	line-height: 150%;
`

export default ({children}) => {
	return <Container>{children}</Container>
}
