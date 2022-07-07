import styled from 'styled-components'

const ContentLogoWrapper = styled.div`
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
`

export default function ContentLogo({ label }: { label: string }) {
  return <ContentLogoWrapper>{label}</ContentLogoWrapper>
}
