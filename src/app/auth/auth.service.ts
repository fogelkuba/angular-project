import * as firebase from 'firebase';
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router){}

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
                    this.router.navigate(['/']);
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