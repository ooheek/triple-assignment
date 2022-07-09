import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { DurationAndDelayType, fadeInAppear } from '../styles/animation'

const AwardsContainerWrapper = styled.div<DurationAndDelayType>`
  margin: 50px 0px 140px 623px;
  white-space: nowrap;

  animation: ${(props) =>
    css`
      ${fadeInAppear} ${props.duration}s linear ${props.delay}s
    `};
`

export default function AwardsContainer({
  children,
  animation,
}: {
  children: ReactNode
  animation: DurationAndDelayType
}) {
  return (
    <AwardsContainerWrapper
      duration={animation.duration}
      delay={animation.delay}
    >
      {children}
    </AwardsContainerWrapper>
  )
}
