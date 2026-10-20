import type { FC } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import BeforeAfterComparison from './components/BeforeAfterComparison'
import TransformationJourney from './components/TransformationJourney'
import ComparisonSlider from './components/ComparisonSlider'
import BusinessGrowthDashboard from './components/BusinessGrowthDashboard'
import ImpactCards from './components/ImpactCards'
import IndustrySelector from './components/IndustrySelector'
import GrowthRoadmap from './components/GrowthRoadmap'
import BusinessCalculator from './components/BusinessCalculator'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

const App: FC = () => (
  <div className="bg-background text-on-surface antialiased selection:bg-primary selection:text-on-primary font-body-md text-body-md min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <HeroSection />
      <BeforeAfterComparison />
      <TransformationJourney />
      <ComparisonSlider />
      <BusinessGrowthDashboard />
      <ImpactCards />
      <IndustrySelector />
      <GrowthRoadmap />
      <BusinessCalculator />
      <FinalCTA />
    </main>
    <Footer />
  </div>
)

export default App
