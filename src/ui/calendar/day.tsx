interface DayProps {
  day: number
  monthIndex: number
  year: number
  blank: boolean
}

export function Day({ day, monthIndex, year, blank }: DayProps) {
  return (
    <li
      data-day={day}
      data-month={monthIndex}
      data-year={year}
      className={`day${blank ? ' blank' : ''}`}>
      <span>{day}</span>
    </li>
  )
}
