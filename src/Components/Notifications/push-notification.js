import firebase from 'firebase';

export const initializeFirebase = () => {
    firebase.initializeApp({
        messagingSenderId: "your messagingSenderId"
    });

    // navigator.serviceWorker
    //     .register('/my-sw.js')
    //     .then((registration) => {
    //         firebase.messaging().useServiceWorker(registration);
    //     });

}

export const askForPermissioToReceiveNotifications = async () => {
    try {
        const messaging = firebase.messaging();
        const token = await messaging.getToken();
        // await messaging.requestPermission();
        console.log('token do usuário:', token);
        return token;
    } catch (error) {
        console.error(error);
    }
}

