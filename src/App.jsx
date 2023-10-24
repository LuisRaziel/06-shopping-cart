import { products as INITIAL_PRODCTS } from './mocks/product.json'
import { Products } from './Components/Products'
import { useState, useContext } from 'react'
import { Header } from './Components/Header'
import { Filters } from './Components/Filters'
import { Footer } from './Components/Footer'
import { FiltersContext } from './context/filters'

function useFilters() {
  // const [filters, setFilters] = useState({
  //   category: 'all',
  //   minPrice: 0,
  // })

  const filters = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        (filters.category === 'all' || product.category === filters.category) &&
        product.price >= filters.minPrice
      )
    })
  }
  return { filterProducts, setFilters }
}

function App() {
  const [products] = useState(INITIAL_PRODCTS)
  const { filterProducts, setFilters } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header>
        <Filters onChange={setFilters} />
      </Header>
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App 
