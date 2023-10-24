import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        (filters.category === 'all' || product.category === filters.category) &&
        product.price >= filters.minPrice
      )
    })
  }
  return { filters, filterProducts, setFilters }
}
