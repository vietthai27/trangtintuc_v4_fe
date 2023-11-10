
import { Route, Routes } from 'react-router-dom';
import routes from './routes';


function App() {

  return (
    <div className="App">
     
      <Routes>
          {
            routes.map((element, index) => {
              return (
                <Route path = {element.path} element = {element.element} key={index}/>
              )
            })
          }
      </Routes>

      
    </div>
  );
}

export default App;
