import firebase from "firebase/compat/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_API_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

// const db = firebaseApp.firestore();

const requestForToken = () => {
  return getToken(messaging, {
    vapidKey:
      "BDYdzNnWjuiQ25-hqLbGNsThmmSZs6PJdXMzUhXAJbKtBZliOs4IS-aUo-NQ1lnP8wa0JKOkOd5ee7Cj7uIZUf4",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};

const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
  });

export {
  firebase,
  firebaseApp,
  firebaseConfig,
  messaging,
  requestForToken,
  onMessageListener,
};
