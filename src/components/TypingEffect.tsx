import TypedJS, { TypedOptions } from 'typed.js'
import React, { useEffect, useRef } from 'react'

type Props = TypedOptions & {
  className?: string
}

const TypingEffect: React.FC<Props> = ({ className, ...props }) => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new TypedJS(el.current, {
      strings: [''],
      startDelay: 300,
      loop: true,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      ...props,
    })

    return () => {
      typed.destroy()
    }
  }, [props])

  return <span className={className} ref={el}></span>
}

export default TypingEffect
