import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header.jsx'
import Home from './Home.jsx'
import TermPort from './TermPort.jsx'
import Imprimante from './Imprimante.jsx'
import Scanner from './Scanner.jsx'
import RFID from './RFID.jsx'
import Conso from './Conso.jsx'
import Tablette from './Tablette.jsx'
import Accessoire from './Accessoire.jsx'
import TelCross from './TelCross.jsx'
import Logiciel from './logiciel.jsx'
import TabletteDetail from './TabletteDetail.jsx'
import TermPortDetail from './TermPortDetail.jsx'
import ImprimanteDetail from './ImprimanteDetail'
import ScannerDetail from './ScannerDetail.jsx'
import RFIDDetail from './RFIDDetail.jsx'
import ConsoDetail from './ConsoDetail.jsx'
import Footer from './footer.jsx'
import AccessoireDetail from './AccessoireDetail.jsx'
import LogicielDetail from './LogicielDetail.jsx'
import Contact from './Contact.jsx'
import AccCross from './AccCross.jsx'
import TelCrossDetail from './TelCrossDetail.jsx'
import AccCrossDetail from './AccCrossDetail'
import DellOrdi from './DellOrdi.jsx'
import DellOrdi02 from './DellOrdi02.jsx'
import Ecrans from './Ecran.jsx'
import ContactCommercial from './ContactCommercial.jsx'
import DellGaming from './DellGaming.jsx'
import AccDell from './AccDell.jsx'
import DetailAccDell from './DetailAccDell.jsx'
import DetailDellGaming from './DetailDellGaming.jsx'
import DetailDellOrdi from './Detaildellordi.jsx'
import DetailEcran from './DetailEcran.jsx'
import DetailDellOrdi02 from './DetailDellOrdi02.jsx'
import Devis from './Devis.jsx'

function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Terminaux-portables' element={<TermPort/>} />
        <Route path='/Imprimantes' element={<Imprimante/>} />
        <Route path='/Scanner' element={<Scanner/>} />
        <Route path='/RFID' element={<RFID/>} />
        <Route path='/Consommables' element={<Conso/>} />
        <Route path='/Tablettes' element={<Tablette/>} />
        <Route path='/Accessoire' element={<Accessoire/>} />
        <Route path='/Téléphone-Crosscall' element={<TelCross/>} />
        <Route path='/Logiciel' element={<Logiciel/>} />
        <Route path="/tablettes/:sku" element={<TabletteDetail />} />
        <Route path="/terminaux/:sku" element={<TermPortDetail />} />
        <Route path="/imprimantes/:sku" element={<ImprimanteDetail />} />
        <Route path="/scanners/:sku" element={<ScannerDetail />} />
        <Route path="/rfid/:sku" element={<RFIDDetail />} />
        <Route path="/consommables/:sku" element={<ConsoDetail />} />
        <Route path="/accessoires/:sku" element={<AccessoireDetail />} />
        <Route path="/logiciel/:slug" element={<LogicielDetail />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/Accessoire-Crosscall" element={<AccCross/>} />
        <Route path="/Téléphone-Crosscall/:slug" element={<TelCrossDetail />} />
        <Route path="/Accessoires-Crosscall/:slug" element={<AccCrossDetail />} />
        <Route path='/Ordi-Dell' element={<DellOrdi/>} />
        <Route path='/Ordi-Bureau-Dell' element={<DellOrdi02/>} />
        <Route path='/Ordi-Bureau-Dell/:slug' element={<DetailDellOrdi02/>} />
        <Route path='/Ecrans' element={<Ecrans/>} />
        <Route path='/Ecrans/:slug' element={<DetailEcran/>} />
        <Route path='/Contact-Commercial' element={<ContactCommercial/>} />
        <Route path='/Gaming-Dell' element={<DellGaming/>} />
        <Route path='/Accessoires-Dell' element={<AccDell/>} />
        <Route path='/Accessoires-Dell/:slug' element={<DetailAccDell/>} />
        <Route path="/Dell-Gaming/:slug" element={<DetailDellGaming />} />
        <Route path="/Ordi-Dell/:slug" element={<DetailDellOrdi/>} />
        <Route path="/Devis" element={<Devis/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
