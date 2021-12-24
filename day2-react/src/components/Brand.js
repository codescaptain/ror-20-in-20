import React, {useContext} from 'react'
import {getContrastYIQ} from '../helper'
import MainContext from '../context/MainContext'


const Brand = ({brand}) => {

  const {addBrands, selectedBrands, removeBrands} = useContext(MainContext)

  const toggleSelected = () => {
    if (selectedBrands.includes(brand.slug)){
      removeBrands(brand.slug)
    }else{
      addBrands(brand.slug)
    }
  }
  return (
    <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}>
      <h5 onClick={toggleSelected}>{brand.title}</h5>
      <div className="brand-colors">
        {brand.colors.map((color, key) => (
          <span key={key} style={{'--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}`}}>#{color}</span>
        ))}
        {JSON.stringify(selectedBrands)}
      </div>
    </div>
  )
}

export default Brand
