import {useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [url, setUrl] = useState();

  //functions

  const onChangeUrl = (ev) => {
     setUrl(ev.target.value);
  }

  const onClickHandler = (ev) => {
    const registered = {
      url:[url]
    }
    axios.post('http://localhost:8000/app/uptime-check', registered);
  }
  return (
    <div className="container bordered">
      <h1 className="brand-logo p-3">Uptimer</h1>
     <div className="input-box p-3">
     <b>Add URL</b>
     <br />
     <input type="text" className='' value={url} onChange={onChangeUrl} autoFocus/>
     <input type="button" className='' value='Add' onClick={onClickHandler}/>

     </div>
       <div className='ping-box'>
         <div className="url-ping-box">
           <div className='url-box'></div>
           <div className='active'></div>
         </div>
       </div>
    </div>
  );
}

export default App;
