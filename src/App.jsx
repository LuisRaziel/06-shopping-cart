import { products as INITIAL_PRODCTS } from './mocks/product.json'
import { Products } from './Components/Products'
import { useState } from 'react'
import { Header } from './Components/Header'
import { Filters } from './Components/Filters'

function App() {
  const [products] = useState(INITIAL_PRODCTS)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        (filters.category === 'all' || product.category === filters.category) &&
        product.price >= filters.minPrice
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header>
        <Filters onChange={setFilters} />
      </Header>
      <Products products={filteredProducts} />
    </>
  )
}

export default App
