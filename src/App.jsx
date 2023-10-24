import { products as INITIAL_PRODCTS } from './mocks/product.json'
import { Products } from './Components/Products'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { useFilters } from './hooks/useFilters'

function App() {
  const { filterProducts} = useFilters()
  const filteredProducts = filterProducts(INITIAL_PRODCTS)

  return (
    <>
      <Header/>
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
