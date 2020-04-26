import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput } from '@ionic/react';
import React from 'react';

const QR = () => {
  return (
    <>

      <h1>Click To Scan</h1>
      <div>
        <video id="barcodeScanStream"></video>
      </div>

      <div class="inputControls">
        <div id="deviceready">
          <button onclick="scan()" id="scanButton">Scan barcode</button>
          <input type="text" id="barcodeScanDevice" placeholder="1"></input>
        </div>
      </div>

    </>
  );
};

export default QR;