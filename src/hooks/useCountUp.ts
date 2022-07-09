import { useEffect, useMemo, useState } from 'react'

function easeOutExpo(x: number) {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}

// 스크린프레임 : 1초당 60프레임을 그린다
const SCREEN_FRAME_PER_SECOND = 60

export default function useCountUp(
  maxNumber: number,
  duration: number,
): number {
  const [number, setNumber] = useState(0)
  // duration을 기준으로 총 실행되어야 할 프레임의 수를 구한다
  const animateTimes = SCREEN_FRAME_PER_SECOND * (duration / 1000)

  // animatedTimes마다 easeOutExpo 진척도에 따라 점차 커지는 값의 비율을 정한다
  const valueRatio = useMemo(
    () =>
      [...Array(animateTimes)]
        .map((_, index) => easeOutExpo(1 / (index + 1)))
        .reverse(),
    [animateTimes],
  )

  // 값의 비율에 따라 timeout으로 호출한다
  // 현재 숫자 : Math.round(maxNumber * value) 숫자가 실행될 time : value * duration
  useEffect(() => {
    valueRatio.forEach((value) => {
      setTimeout(() => {
        const currentNumber = Math.round(maxNumber * value)
        setNumber(currentNumber)
      }, value * duration)
    })
  }, [valueRatio, duration, maxNumber])

  return number
}
