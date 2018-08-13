import * as firebase from 'firebase';

export class AuthService {
    token: string;

    signupUser(email: string, password: string) {
        console.log('auth');
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
            err => {
                console.log(err);
            }
        )
    }

    signinUser(email: string, password: string) {
        console.log('auth');
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                     firebase.auth().currentUser.getIdToken().then(
                         TOKEN: string => {
                             this.token = token;
                    }
                     );
                    console.log(response);
                }
            )
            .catch(
                err => {
                    console.log(err);
                }
            )
    }

    getIdToken() {
        firebase.auth().currentUser.getIdToken();
    }
}