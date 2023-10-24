import { Filters } from './Filters'

export function Header({ onChangeFilters }) {
  return (
    <header>
      <h1>React Shop ⚛ </h1>
      <Filters onChange={onChangeFilters} />
    </header>
  )
}
