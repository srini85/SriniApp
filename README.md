# Srini's App

## Ionic

To run in android

```
ionic cordova run android --device
``` 

If you want to have it livereloading use the command

```
ionic cordova run android --device --livereload
```

## Firebase
This project uses firebase.

### Functions
To start a new firebase functions
```
firebase init functions
```

To deploy the firebase functions
```
firebase deploy --only functions
```

## Authentication
Used firebase authentication using AngularFire2. 

[https://github.com/angular/angularfire2/blob/master/docs/Auth-with-Ionic3-Angular4.md]('https://github.com/angular/angularfire2/blob/master/docs/Auth-with-Ionic3-Angular4.md')

### Facebook login - native app
Using the facebook login for the native app, we need to get the key used for signing when we register the app in the facebook dev portal.

Ionic generates a key at build time and stores this in the keystore. We can get this key from the keystore using this command

```
keytool -exportcert -alias androiddebugkey -keystore %homepath%\.android\debug.keystore | openssl sha1 -binary | openssl base64
```