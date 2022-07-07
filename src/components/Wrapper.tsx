import { ReactNode } from 'react'
import styled from 'styled-components'

const WrapperDiv = styled.div`
  width: 1040px;
  height: auto;
  margin: 0px auto;
  position: relative;
`

export default function Wrapper({ children }: { children: ReactNode }) {
  return <WrapperDiv>{children}</WrapperDiv>
}
