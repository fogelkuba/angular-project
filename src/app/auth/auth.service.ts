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
                        (token: string) => {
                            this.token = token;
                        });
                    console.log(response);
                }
            )
            .catch(
                err => {
                    console.log(err);
                }
            )
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
        console.log('logout');
    }

    getIdToken() {
        firebase.auth().currentUser.getIdToken().then(
            (token: string) => {
                this.token = token;
            });
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}