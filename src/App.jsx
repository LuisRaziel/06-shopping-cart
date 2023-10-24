import { products} from './mocks/product.json'
import { Products } from './Components/Products'
function App() {

  return (
    <div className="App">
      <Products products={products} />
    </div>
  )
}

export default App
