import React, { useContext } from 'react'
import Search from './Search'
import Brand from './Brand'
import MainContext from '../context/MainContext';

const Content = () => {
 const {brands} = useContext(MainContext);

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
