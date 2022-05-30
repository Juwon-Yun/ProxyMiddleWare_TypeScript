import axios, { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import './App.css';

const exampleAxios = async (
    name :string
  ):Promise<AxiosResponse> =>
  await axios.get('example', {
    params : {example : name}
  }
)

function App() {

  useEffect(()=>{
    console.log('when useEffect method is run');
    try{
      const res : any = exampleAxios('DevJuwon');
      console.log('Result Data => ', res.data);
    }catch(error){
      console.log('Axios Error', error);
    }finally{
      return console.log('return useEffect');
    }
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={'./logo.svg'} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
