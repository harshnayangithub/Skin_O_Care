import { BrowserRouter,Route,Routes } from "react-router-dom";
import Scan from './containers/App.tsx'
import Mainpage from './Mainpage';
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Mainpage/>}/>;
      <Route path="Scan" element={<Scan/>}/>;

      
    </Routes>
    </BrowserRouter>
  )
}
export default App;