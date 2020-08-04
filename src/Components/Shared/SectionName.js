import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	padding: 1rem 1rem;
	text-align: center;
	font-weight: bolder;
	font-size: 150%;
`
export default ({children}) => {
	return <h1>{children}</h1>
}
