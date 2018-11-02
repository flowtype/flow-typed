// @flow
import * as React from 'react'
import styled from 'styled-components'

// Test that we can wrap a functional component

type Props = { name : string }

const Hello = (p : Props ) =>
  <div>Hello {p.name}</div>

const StyledHello = styled(Hello)``

const hello1 : React.Element<typeof Hello> = <StyledHello name="World" />

// $ExpectError - Invalid prop type
const hello2 : React.Element<typeof Hello> = <StyledHello name={3} />