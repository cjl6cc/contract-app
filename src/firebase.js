import firebase from 'firebase';
var config = {
   apiKey: "AIzaSyBZO3JtbRx-4Xp0Njw5wibQBS9X5-qHEsw",
   authDomain: "contract-app2.firebaseapp.com",
   databaseURL: "https://contract-app2.firebaseio.com",
   projectId: "contract-app2",
   storageBucket: "contract-app2.appspot.com",
   messagingSenderId: "640579335454"
 };
 firebase.initializeApp(config);

 export default firebase;
