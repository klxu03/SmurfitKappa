import React, { useState, useRef } from 'react';
import ImageUploader from 'react-images-upload';

import axios from 'axios';

import { IonPage, IonButton, IonItem, IonLabel, IonInput, IonGrid, IonRow } from '@ionic/react';

import { SmurfitKappa } from "./img/SmurfitKappa.png";

const Home = () => {
    const [pictures, setPictures] = useState([]);
    const descriptionRef = useRef(null);

    const onDrop = (pic) => {
        setPictures([...pictures, pic]);
        console.log('Pictures', pictures);
    }

    const handleSubmit = () => {
        // console.log(pictures[pictures.length - 1]);
        if (pictures.length > 0) {
            const image = pictures[pictures.length - 1];
            const formData = new FormData();
            formData.append('image', image, 'Walmart');
            axios.post('/user/image', formData)
                .then(res => {

                })
                .catch(err => console.log(err))
        }

        //Check if the company description is empty

    }

    return (
        <IonPage>
            <IonGrid>
                <IonRow>
                    {/* <img src='./img/SmurfitKappa.png' /> */}
                </IonRow>
                <IonRow>
                    <ImageUploader
                        withIcon={true}
                        buttonText='Select an Image'
                        onChange={onDrop}
                        imgExtension={['.jpg', '.png']}
                        maxFileSize={5242880}
                        label='Plesae upload an image'
                        withPreview={true}
                        singleImage={true}
                    />
                </IonRow>
                <IonRow>
                    <IonItem>
                        <IonLabel position="floating">
                            Company Description
                </IonLabel>
                        <IonInput type="text" ref={descriptionRef}></IonInput>
                    </IonItem>
                </IonRow>
            </IonGrid>
            <IonButton expand="block" onClick={handleSubmit}>Submit</IonButton>
        </IonPage>

    );
}

export default Home;
