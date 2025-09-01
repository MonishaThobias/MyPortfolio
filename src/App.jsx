import AboutSec from "./components/AboutSec"
import BannerSec from "./components/BannerSec"
import ContactSec from "./components/ContactSec"
import FooterSec from "./components/FooterSec"
import Navbar from "./components/Navbar"
import PortfolioSec from "./components/PortfolioSec"
import ServiceSec from "./components/ServiceSec"
import SkillSec from "./components/SkillSec"


function App() {

  return (
    <>
     <div className="min-h-screen font-sans">
      <Navbar />
      <BannerSec />
      <AboutSec />
      <SkillSec />
      <PortfolioSec />
      <ServiceSec />
      <ContactSec />
      <FooterSec />
      </div>
    </>
  )
}


export default App
