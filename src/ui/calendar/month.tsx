import { Client } from '../client'
import { Day } from './day'
import MonthTitle from './month-title'

interface MonthProps {
  lang: string
  monthIndex: number
  year: number
}

export function Month({ lang, monthIndex, year }: MonthProps) {
  const monthIntl = new Intl.DateTimeFormat(lang, { month: 'long' })
  const monthName = monthIntl.format(new Date(year, monthIndex, 1))

  const weekIntl = new Intl.DateTimeFormat(lang, { weekday: 'short' })

  const startOn = new Date(year, monthIndex, 1).getDay()

  return (
    <section className='month-container'>
      <div className='month'>
        <Client
          compName='MonthTitle'
          props={{ monthIndex, monthName, year }}
          Comp={MonthTitle}
        />
        <ol>
          {Array.from({ length: 7 }, (_, i) => (
            <li key={`${year}-${monthIndex}-weekday:${i}`} className='weekday'>
              {weekIntl.format(new Date(2026, 1, i + 1))}
            </li>
          ))}
          {Array.from({ length: 35 }, (_, i) => {
            const date = new Date(year, monthIndex, i + 1 - startOn)

            const d = date.getDate()
            const m = date.getMonth()
            const y = date.getFullYear()

            return (
              <Day
                key={`${y}-${monthIndex}-${i}`}
                day={d}
                monthIndex={m}
                year={y}
                blank={m !== monthIndex}
              />
            )
          })}
        </ol>
      </div>
    </section>
  )
}
