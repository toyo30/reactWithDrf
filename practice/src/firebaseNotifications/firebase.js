// Firebase Cloud Messaging Configuration File.
// Read more at https://firebase.google.com/docs/cloud-messaging/js/client && https://firebase.google.com/docs/cloud-messaging/js/receive

import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyBWV44XKYxmaUjgC6esgIpDIQnXO8DBubM",
  authDomain: "web-push-59c5b.firebaseapp.com",
  projectId: "web-push-59c5b",
  storageBucket: "web-push-59c5b.appspot.com",
  messagingSenderId: "594747426861",
  appId: "1:594747426861:web:1fe09572b4c6efe34a10a4",
  measurementId: "G-QH2H3MLW7L",
};

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey: `BDYdzNnWjuiQ25-hqLbGNsThmmSZs6PJdXMzUhXAJbKtBZliOs4IS-aUo-NQ1lnP8wa0JKOkOd5ee7Cj7uIZUf4`,
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
