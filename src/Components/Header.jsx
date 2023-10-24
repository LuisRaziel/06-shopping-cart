// import { Filters } from './Filters'

import { Filters } from "./Filters";

export function Header() {
  return (
    <header>
      <h1>React Shop 🛍  </h1>
      {/* <Filters onChange={onChangeFilters} /> */}
      <Filters />
    </header>
  )
}
