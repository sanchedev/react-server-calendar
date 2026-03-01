import { Day } from './day'

interface MonthProps {
  monthIndex: number
  year: number
}

export function Month({ monthIndex, year }: MonthProps) {
  const startOn = new Date(year, monthIndex, 1).getDay()

  return (
    <section className='month-container' id={`month-${monthIndex}`}>
      <div className='month'>
        <ol>
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
