import Header from '../components/Header';
import Footer from '../components/Footer';
import ButtonFab from '../components/ButtonFab';

export default function BaseLayout({ children }) {
  return (
    <div className="mobile-container">
      <Header />
      <main>{children}</main>
       <Footer /> {/* ← nuevo */}
      <ButtonFab />
    </div>
  );
}