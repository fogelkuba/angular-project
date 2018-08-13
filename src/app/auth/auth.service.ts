// import {Injectable} from "@angular/core";
import * as firebase from 'firebase';

// @Injectable()

export class AuthService {
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
            .catch(
                err => {
                    console.log(err);
                }
            )
    }
}