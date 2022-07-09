import { useState } from 'react'
import styled from 'styled-components'
import useCountUp from '../hooks/useCountUp'

const MetricItemWrapper = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
`

export default function MetricItem({
  num,
  unit,
  label,
}: {
  num: number
  unit: string
  label: string
}) {
  const number = useCountUp(num, 2000)

  return (
    <MetricItemWrapper>
      <strong>
        <span>{number}</span>
        {unit}
      </strong>
      의 {label}
    </MetricItemWrapper>
  )
}
