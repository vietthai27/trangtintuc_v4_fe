
import { Route, Routes } from 'react-router-dom';
import routes from './routes';
import '../src/assets/css/style.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <div className="App">
      <Routes>
        {
          routes.map((element, index) => {
            return (
              <Route path={element.path} element={element.element} key={index} />
            )
          })
        }
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
