import React, { useState } from 'react'
import Search from './Search'
import BrandsData from '../brands.json'
import Brand from './Brand'

const Content = () => {

  const brandsArray = []
  Object.keys(BrandsData).map(key => {
    brandsArray.push(BrandsData[key])
  })

  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands] = useState([])

  return (
    <main className="content">
      <header className="header">
        <Search/>
      </header>
      <section className="brands">
        {brands.map((brand, key) => (
          <Brand key={key} brand={brand} />
        ))}
      </section>
    </main>
  )
}

export default Content
