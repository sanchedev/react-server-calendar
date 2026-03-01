import { useEffect, useRef, useState } from 'react'
import z from 'zod'
import { ChevronLeft } from './icons/chevron-left'
import { ChevronRight } from './icons/chevron-right'

export const schema = z.object({
  months: z.array(z.string()).length(12),
  weekdays: z.array(z.string()).length(7),
  year: z.number(),
})

export default function CalendarNav({
  months,
  weekdays,
  year,
}: z.infer<typeof schema>) {
  const [month, setMonth] = useState(0)

  const mainRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const main = document.querySelector('main')
    if (main == null) return
    mainRef.current = main

    const onScroll = () => {
      setMonth(Math.round((main.scrollTop / main.scrollHeight) * 12))
    }

    main.addEventListener('scroll', onScroll)

    return () => {
      main.removeEventListener('scroll', onScroll)
    }
  }, [])

  const goTo = (month: number) => {
    if (mainRef.current == null) return
    if (month < 0 || month > 11) return

    const height = mainRef.current.scrollHeight / 12

    mainRef.current.scrollTo({
      behavior: 'smooth',
      top: height * month,
    })
  }

  const handleBack = () => goTo(month - 1)
  const handleForward = () => goTo(month + 1)

  const hrefPrev = month < 1 ? `/${year - 1}#month-11` : `#month-${month - 1}`
  const hrefNext = month > 10 ? `/${year + 1}#month-0` : `#month-${month + 1}`

  return (
    <nav id='calendar-nav'>
      <header>
        <a href={hrefPrev} aria-label='Previous'>
          <ChevronLeft />
        </a>
        <h2>
          <span>{months[month]}</span>
          <span>{year}</span>
        </h2>
        <a href={hrefNext} aria-label='Next'>
          <ChevronRight />
        </a>
      </header>
      <ol className='weekdays'>
        {weekdays.map((w) => (
          <li key={w}>{w.toUpperCase()}</li>
        ))}
      </ol>
    </nav>
  )
}
