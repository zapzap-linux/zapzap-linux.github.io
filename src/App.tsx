import {Navbar} from './components/navbar'
import Home from './partials/home'
import Donate from './partials/donate'
import Features from './partials/features'
import Download from './partials/download'
import Gallery from './partials/gallery'
import Footer from './components/footer'


function App() {

  return (
    <main>
      <Navbar />
      <Home />
      <Features />
      <Gallery />
      <Download />
      <Donate />
      <Footer />
    </main>
  )
}

export default App
