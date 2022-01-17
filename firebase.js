import { firebase } from "@firebase/app";
import "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCHC1by76SG9khTiSH4UYGo6r1NIVTt2LA",
  authDomain: "spherical-park-337016.firebaseapp.com",
  projectId: "spherical-park-337016",
  storageBucket: "spherical-park-337016.appspot.com",
  messagingSenderId: "426462387447",
  appId: "1:426462387447:web:0f704736d3f671628e07f2",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
