// import { Filters } from './Filters'

export function Header({ children }) {
  return (
    <header>
      <h1>React Shop ⚛ </h1>
      {/* <Filters onChange={onChangeFilters} /> */}
      {children}
    </header>
  )
}
