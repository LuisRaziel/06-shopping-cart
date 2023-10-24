import { useState } from 'react'
import './Filters.css'
export function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    onChange(prevState => ({
        ...prevState,
        minPrice: event.target.value
    }))
  }

  // 🔻 no se debería pasar una función de actualización del estado como prop a un hijo 
  const handleChangeCategory = (event) => {
    onChange(prevState => ({
        ...prevState,
        category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Price</label>
        <input
          type='range'
          id='price'
          min={0}
          max={1000}
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice}</span>
      </div>
      <div>
        <label htmlFor='category'>Categoría </label>
        <select name='' id='category' onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}
