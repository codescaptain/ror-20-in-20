import './App.scss';
import Content from './components/Content';
import Sidebar from './components/Sidebar'
import MainContext from './context/MainContext'
import BrandsData from './brands.json'
import { useState } from 'react';

const App = () => {

  const brandsArray = []
  Object.keys(BrandsData).map(key => {
    brandsArray.push(BrandsData[key])
  })

  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands] = useState([])

  const removeBrands = (getSlug) => {
    setSelectedBrands(selectedBrands.filter((slug, i) => slug !== getSlug))
  }

  const addBrands = (getSlug) => {
    setSelectedBrands([...selectedBrands, getSlug ])
  }

  const data = {
    brands,
    selectedBrands,
    removeBrands,
    addBrands
  }
  return (
    <>
    <MainContext.Provider value={data}>
      <Sidebar />
      <Content />
    </MainContext.Provider>
    </>  
  );
}

export default App;
