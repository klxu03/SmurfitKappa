import React, { useRef, useState, useEffect } from 'react';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonAlert,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonPage,
  IonIcon,
} from '@ionic/react';
import './Profile.css';

import InputControl from '../components/input-control.component';
import Submission from '../components/submission.component';
import Menu from '../components/menu.component';

const Profile = () => {
  // window.location.reload(false)
  console.log('Looking at profile');

  const usernameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);
  const [error, setError] = useState();
  const [status, setStatus] = useState('Login');

  const setStatusHandler = (selectedType) => {
    setStatus(selectedType);
  };

  const submitHandler = () => {
    const enteredUsername = usernameInputRef.current?.value;
    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;
    const enteredConfirmPassword = confirmPasswordRef.current?.value;

    if (status == 'Register') {
        if(!enteredEmail || enteredConfirmPassword) {
          setError('Please fill out all forms')
        }
    }
    if (!enteredUsername || !enteredPassword) {

      setError('Please fill out all forms');

      return;
    }

    //post request, post the submission
  };

  const resetHandler = () => {
    usernameInputRef.current.value = '';
    emailInputRef.current.value = '';
    passwordInputRef.current.value = '';
    confirmPasswordRef.current.value = '';
  };

  const clearError = () => {
    setError('');
  };

  return (
    <React.Fragment>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[
          {
            text: 'Okay',
            handler: () => {
              return clearError;
            },
          },
        ]}
      />

      <IonPage>
        <Menu title="profile" />
        <IonHeader>
          <IonToolbar>
            <IonTitle>Login/Register</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <InputControl selectedValue={status} onSelectValue={setStatusHandler} />
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">
                    Username
                    {console.log('Here in Profile Username, status is ', status)}
                  </IonLabel>
                  <IonInput type="text" ref={usernameInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            {status == 'Register' &&
              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput type="text" ref={emailInputRef}></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
            }

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput type="text" ref={passwordInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            {status == 'Register' &&
              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel position="floating">Confirm Password</IonLabel>
                    <IonInput type="text" ref={confirmPasswordInputRef}></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
            }

            <Submission onSubmit={submitHandler} onReset={resetHandler} />
          </IonGrid>
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default Profile;
