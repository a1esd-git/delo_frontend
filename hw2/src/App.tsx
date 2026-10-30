import '../src/css/App.css'

import Hero from '../src/components/Hero'
import Projects from './components/Projects'
import Requests from './components/Requests'

function App(){
    return(
        <main>
            <Hero/>
            <Projects/>
            <Requests/>
        </main>
    )
}
export default App
