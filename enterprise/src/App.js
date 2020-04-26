import React, { useState, useEffect } from 'react';
import { Redirect, Route, Link, Switch } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { personCircleOutline, walletOutline, mapOutline } from 'ionicons/icons';

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import StoreModal from './pages/StoreModal';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userToken, setUserToken] = useState();

  useEffect(() => {
    setLoggedIn(false);
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            {/* <Route path="/profile" component={loggedIn ? Profile : Login} />\            <Route path="/profile" component={loggedIn ? Profile : Login} /> */}
            <Route path="/profile" render={() => {
              if(loggedIn) {
                return <Profile />
              } else {
                return <Login />
              }
            }} exact />
            <Route path="/home" component={() => <Home id={userToken}/>} exact />
            <Redirect from="/" to="/home" />
            <Route path="/store/:name" component={StoreModal} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={personCircleOutline} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Home" href="/Home">
              <IonIcon icon={walletOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
