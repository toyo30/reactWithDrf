// // Scripts for firebase and firebase messaging
// importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  //   apiKey: process.env.REACT_APP_FB_API_KEY,
  //   authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  //   projectId: process.env.REACT_APP_FB_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_FB_API_ID,
  //   measurementId: `REPLACE_WITH_YOUR_FIREBASE_MESSAGING_MEASUREMENT_ID`,
  apiKey: "AIzaSyBWV44XKYxmaUjgC6esgIpDIQnXO8DBubM",
  authDomain: "web-push-59c5b.firebaseapp.com",
  projectId: "web-push-59c5b",
  storageBucket: "web-push-59c5b.appspot.com",
  messagingSenderId: "594747426861",
  appId: "1:594747426861:web:1fe09572b4c6efe34a10a4",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
