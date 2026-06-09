import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import siteData from './data/siteData.json'

function App() {
  return (
    <>
      <Header brand={siteData.brand} navigation={siteData.navigation} />
      <Home data={siteData} />
      <Footer
        brand={siteData.brand}
        navigation={siteData.navigation}
        services={siteData.services}
        footerLinks={siteData.footerLinks}
      />
    </>
  )
}

export default App
