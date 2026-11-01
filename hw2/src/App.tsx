import '../src/css/App.css'
import '../src/css/normalize.css'

import Hero from '../src/components/Hero'
import ProjectsList from './components/ProjectsList'
import Requests from './components/Requests'
import Footer from './components/Footer'

function App(){
    return(
        <main>
            <Hero/>
            <ProjectsList/>
            <Requests/>
            <Footer/>
        </main>
    )
}
export default App
