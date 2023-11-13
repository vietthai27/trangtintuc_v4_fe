
import { Route, Routes } from 'react-router-dom';
import routes from './routes';
import '../src/assets/css/style.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Heading from './component/Heading';
import Footer from './component/Footer';
import LeftSide from './component/LeftSide';
import RightSife from './component/RightSife';


function App() {

  return (
    <div className="App">
      <Heading />
      <div className='body'>
        <LeftSide />
        <Routes>
          {
            routes.map((element, index) => {
              return (
                <Route path={element.path} element={element.element} key={index} />
              )
            })
          }
        </Routes>
        <RightSife />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
