import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';

import './StoreModal.scss';

import { ActionSheetButton } from '@ionic/core';
import {
  IonActionSheet,
  IonChip,
  IonIcon,
  IonHeader,
  IonLabel,
  IonToolbar,
  IonButtons,
  IonContent,
  IonButton,
  IonBackButton,
  IonPage,
} from '@ionic/react';
import {
  callOutline,
  callSharp,
  logoTwitter,
  logoGithub,
  logoInstagram,
  shareOutline,
  shareSharp,
} from 'ionicons/icons';

const StoreModal = (match) => {
  const name = match.match.params.name;

  const storeName = 'Please put this as the store name';
  const storeWebsite = 'storeWebsite.com';
  const storeDescription = `Here is the description of the store. The name is ${name}`;

  const [showActionSheet, setShowActionSheet] = useState(false);
  const [actionSheetButtons, setActionSheetButtons] = useState([]);
  const [actionSheetHeader, setActionSheetHeader] = useState('');

  function openContact() {
    setActionSheetButtons([
      {
        text: `${storeWebsite}`,
      },
    ]);
    setActionSheetHeader('Here is the Website of the store');
    setShowActionSheet(true);
  }

  return (
    <IonPage id="speaker-detail">
      <IonContent>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" />
            </IonButtons>
            <IonButtons slot="end">
              <IonButton onClick={() => openContact()}>
                <IonIcon slot="icon-only" ios={shareOutline} md={shareSharp}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <div className="speaker-background">
          <h2>{storeName}</h2>
        </div>

        <div className="ion-padding speaker-detail">
          <p>{storeDescription}</p>

          <hr />
        </div>
      </IonContent>
      <IonActionSheet
        isOpen={showActionSheet}
        header={actionSheetHeader}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={actionSheetButtons}
      />
    </IonPage>
  );
};

export default StoreModal;