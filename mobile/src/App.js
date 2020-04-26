import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProgressBar from './progressBar.js';
import Title from './title.js';

import Qr from './qr.js';

import { IonApp } from '@ionic/react';

/* === Components === */
import ImageUpload from './components/ImageUpload.component';

function App() {
  return (
    <IonApp>
      <Title/>
      <ImageUpload />
      <br></br>
      <ProgressBar/>
      <br></br>
    </IonApp>

  );
}

export default App;
