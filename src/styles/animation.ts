import { keyframes } from 'styled-components'

// 위로 살짝 떠오르는 애니메이션
// 투명도 조절 애니메이션
export const fadeInAppear = keyframes`
from {
    opacity: 0;
    transform: translateY(10%);
  }
to {
    opacity: 1;
    transform: translateY(0);
}
`

export interface DurationAndDelayType {
  delay: number
  duration: number
}
