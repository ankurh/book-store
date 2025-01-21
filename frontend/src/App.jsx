import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  

  return (
    <>
      <Navbar />
      <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary'>
      <Outlet/>
      
      </main>
      <Footer/>
    </>
  )
}

export default App
