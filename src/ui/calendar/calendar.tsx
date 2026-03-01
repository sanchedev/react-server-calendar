import { Client } from '../client'
import CalendarNav from './calendar-nav'
import { Month } from './month'

interface CalendarProps {
  lang: string
  year: number
}

export function Calendar({ lang, year }: CalendarProps) {
  const monthIntl = new Intl.DateTimeFormat(lang, { month: 'long' })
  const weekIntl = new Intl.DateTimeFormat(lang, { weekday: 'short' })

  return (
    <main>
      <Client
        compName='CalendarNav'
        props={{
          months: Array.from({ length: 12 }, (_, i) =>
            monthIntl.format(new Date(year, i, 1)),
          ),
          weekdays: Array.from({ length: 7 }, (_, i) =>
            weekIntl.format(new Date(2026, 1, i + 1)),
          ),
          year,
        }}
        Comp={CalendarNav}
      />
      {Array.from({ length: 12 }, (_, i) => (
        <Month monthIndex={i} year={year} key={`${year}-${i}`} />
      ))}
    </main>
  )
}
