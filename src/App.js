import react from 'react';
import Routes from './Routes';
import { BrowserRouter }  from 'react-router-dom';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <>
     <Routes/>
    </>
    </BrowserRouter>
  );
}

export default App;
