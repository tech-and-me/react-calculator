// import logo from './logo.svg';
import './App.css';
import {Title} from './Components/Title';
import {Display} from  './Components/Display';
import {Buttons} from  './Components/Buttons';

function App() {
  return (
    <div>
        <div class="wrapper">
          <Title />
        <div class="mainParent">
             <Display />
             <Buttons />            
        </div>   
    </div>   
    

      
    </div>
  );
}

export default App;
