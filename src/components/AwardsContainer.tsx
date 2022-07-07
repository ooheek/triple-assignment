import { ReactNode } from 'react'
import styled from 'styled-components'

const AwardsContainerWrapper = styled.div`
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
`

export default function AwardsContainer({ children }: { children: ReactNode }) {
  return <AwardsContainerWrapper>{children}</AwardsContainerWrapper>
}
