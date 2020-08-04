import React from 'react'
import styled from 'styled-components'

const H1 = styled.div`
	font-family: Arial, Helvetica, sans-serif;
	line-height: 1;
	margin-top: 0;
	color: #000;
	display: inline-block;
	position: relative;
	font-family: 'Roboto,300 bold', sans-serif;
	font-weight: bolder;
	font-size: 300%;
`

export default ({children}) => {
	return <H1>{children}</H1>
}
