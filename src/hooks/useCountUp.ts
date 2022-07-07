import { type } from 'os'
import { useEffect, useRef, useState } from 'react'

type Callback = () => void

export default function useCountUp(maxNum: number) {
  const savedCallback = useRef<Callback | undefined>()
  const [number, setNumber] = useState(0)

  const delay = (2 * 1000) / maxNum

  useEffect(() => {
    savedCallback.current = () => setNumber(number + 1)
  })

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current()
      }
    }

    let id: number | undefined

    if (number < maxNum) {
      id = window.setInterval(tick, delay)
    }
    return () => clearInterval(id)
  }, [delay, number])

  return number
}
