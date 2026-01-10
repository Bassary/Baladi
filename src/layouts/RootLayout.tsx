import { Outlet, ScrollRestoration} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
        <ScrollRestoration />
      </main>
      <Footer/>
    </>
  );
}
