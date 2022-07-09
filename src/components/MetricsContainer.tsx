import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { DurationAndDelayType, fadeInAppear } from '../styles/animation'

const MetricsContainerWrapper = styled.div<DurationAndDelayType>`
  margin-left: 623px;
  padding-top: 150px;
  animation: ${(props) =>
    css`
      ${fadeInAppear} ${props.duration}s linear ${props.delay}s
    `};
`
export default function MetricsContainer({
  children,
  animation,
}: {
  children: ReactNode
  animation: DurationAndDelayType
}) {
  return (
    <MetricsContainerWrapper
      duration={animation.duration}
      delay={animation.delay}
    >
      {children}
    </MetricsContainerWrapper>
  )
}
