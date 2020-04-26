import React from 'react';
import '../moreComponents/styleHome.css';
import ProgressBar from '../moreComponents/progressBar.js';
import Title from '../moreComponents/title.js';

import Qr from '../moreComponents/qr.js';

import { IonPage } from '@ionic/react';

/* === Components === */
import ImageUpload from '../moreComponents/ImageUpload.js';

function App() {
  return (
    <IonPage>
      <Title/>
      <br></br>
      <Qr />

      <ImageUpload />
    <br></br>

      <ProgressBar/>
      <br></br>

    </IonPage>

  );
}

export default App;
