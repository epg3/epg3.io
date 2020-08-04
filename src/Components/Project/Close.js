import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
	position: fixed;
	bottom: 4rem;
	right: 4rem;
	background: red;
`

export default props => {
	return <Button {...props}>X Close</Button>
}
