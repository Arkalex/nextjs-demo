import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB6nwnUDbJIkAzDxnfVIeCzZNmCPhlCBg8",
    authDomain: "nextjs-twitter-e9f43.firebaseapp.com",
    projectId: "nextjs-twitter-e9f43",
    storageBucket: "nextjs-twitter-e9f43.appspot.com",
    messagingSenderId: "151727837979",
    appId: "1:151727837979:web:9040498b5f020aa4c4f9be",
    measurementId: "G-V8D00Z31JZ"
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuthToUser = (user) => {
    const {displayName, email, photoURL} = user;

    return {
        avatar: photoURL,
        username: displayName,
        email
    }
}

export const onAuthStateChanged = (onChange) => {
    return firebase
        .auth()
        .onAuthStateChanged(user => {
        const normalizedUser = mapUserFromFirebaseAuthToUser(user);
        onChange(normalizedUser);
    });
}

export const loginWithGithub = () => {
    const githubProvider = new firebase.auth.GithubAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(githubProvider);
}