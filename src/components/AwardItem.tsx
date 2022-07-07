import { Fragment } from 'react'
import styled from 'styled-components'

const AwardItemWrapper = styled.div<{ url: string }>`
  background-size: 54px 54px;
  height: 54px;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;

  display: inline-block;
  font-family: sans-serif;
  background-image: url(${(props) => props.url});
  background-position: left top;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
`

export default function AwardItem({
  imageUrl,
  labelArr,
}: {
  imageUrl: string
  labelArr: Array<string>
}) {
  return (
    <AwardItemWrapper url={imageUrl}>
      {labelArr.map((text, idx) => {
        return idx === labelArr.length ? (
          <Fragment key={idx}>{text}</Fragment>
        ) : (
          <Fragment key={idx}>
            {text}
            <br />
          </Fragment>
        )
      })}
    </AwardItemWrapper>
  )
}
