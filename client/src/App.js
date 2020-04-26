import React from 'react';
import logo from './logo.svg';
import './App.css';


import { IonApp } from '@ionic/react';

/* === Components === */
import ImageUpload from './components/ImageUpload.component';
import ProgressBar from './components/progressBar.component';
import Qr from './components/qr.component';


function App() {
  return (
    <IonApp>
      <ImageUpload />
      <br></br>
      <ProgressBar/>
      <br></br>
      <Qr />
    </IonApp>

  );
}

export default App;
