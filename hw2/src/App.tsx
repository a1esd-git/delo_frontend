import '../src/css/App.css'
import '../src/css/normalize.css'

import Hero from '../src/components/Hero'
import Projects from './components/Projects'
import Requests from './components/Requests'
import Footer from './components/Footer'

function App(){
    return(
        <main>
            <Hero/>
            <Projects/>
            <Requests/>
            <Footer/>
        </main>
    )
}
export default App
