import { About } from './components/About'
import { CTA } from './components/CTA'
import { Differentials } from './components/Differentials'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Method } from './components/Method'
import { Plans } from './components/Plans'
import { Results } from './components/Results'
import { TargetAudience } from './components/TargetAudience'

function App() {
  return (
    <>
      <Header />
      <main className="performance-stage">
        <div className="stage-rail" aria-hidden="true">
          <span>AF</span>
          <span>PERFORMANCE NUTRITION</span>
        </div>
        <Hero />
        <Differentials />
        <TargetAudience />
        <Method />
        <Plans />
        <Results />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
