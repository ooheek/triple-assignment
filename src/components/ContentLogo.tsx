import styled, { css } from 'styled-components'

import { DurationAndDelayType, fadeInAppear } from '../styles/animation'

const ContentLogoWrapper = styled.div<DurationAndDelayType>`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;

  box-sizing: border-box;
  background-image: url(/images/triple2x.png);
  background-repeat: no-repeat;
  text-align: center;
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);

  animation: ${(props) =>
    css`
      ${fadeInAppear} ${props.duration}s linear ${props.delay}s
    `};
`

export default function ContentLogo({
  label,
  animation,
}: {
  label: string
  animation: DurationAndDelayType
}) {
  return (
    <ContentLogoWrapper duration={animation.duration} delay={animation.delay}>
      {label}
    </ContentLogoWrapper>
  )
}
