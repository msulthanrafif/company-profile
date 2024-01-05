import Header from './Header';
import Footer from './Footer';
import InformationPage from './InformationPage';
import OurSpeciality from './OurSpeciality';
import OurCoreValues from './OurCoreValues';
import Banner from './Banner';


export default function App() {

  return (
    <div className="app">
      <Header />
      <Banner/>
      <InformationPage/>
      <OurCoreValues/>
      <OurSpeciality/>
      <Footer />
    </div>
  );
}
