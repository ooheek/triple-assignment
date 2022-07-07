import { ReactNode } from 'react'
import styled from 'styled-components'

const MetricsContainerWrapper = styled.div`
  margin-left: 623px;
  padding-top: 150px; ;
`
export default function MetricsContainer({
  children,
}: {
  children: ReactNode
}) {
  return <MetricsContainerWrapper>{children}</MetricsContainerWrapper>
}
