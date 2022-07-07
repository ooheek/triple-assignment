import styled from 'styled-components'

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
  return (
    <MetricItemWrapper>
      <strong>
        <span>{num}</span>
        {unit}
      </strong>
      의 {label}
    </MetricItemWrapper>
  )
}
