importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "first-project-b586b.firebaseapp.com",
    projectId: "first-project-b586b",
    storageBucket: "first-project-b586b.firebasestorage.app",
    messagingSenderId: "119186378472",
    appId: "1:119186378472:web:9ae5417614c855b3a7835d",
    measurementId: "G-47XFXD1DSJ"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});