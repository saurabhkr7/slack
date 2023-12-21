import { initializeApp } from 'firebase/app';
import {
    // connectAuthEmulator,
    createUserWithEmailAndPassword,
    getAuth,
    // onAuthStateChanged,
    // sendEmailVerification,
    // sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { firebaseConfig } from './config';

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


// if (window.location.hostname === 'localhost') {
//     connectAuthEmulator(auth, 'http://127.0.0.1:9099');
// }

/**
 * Handles the sign in button press.
*/
async function handleLogIn(email: string, password: string): Promise<any> {
    if (auth.currentUser) {
        signOut(auth);
    } else {
        // Sign in with email and pass.
        let results = null;
        await signInWithEmailAndPassword(auth, email, password).then((result) => {
            console.log("success", result)
            results = result.user;
        }).catch(function (error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            results = error;
        });
        return results;
    }
}

/**
 * Handles the sign up button press.
 */
const handleSignUp = async (email: string, password: string): Promise<any> => {
    // Create user with email and pass.
    let results = null;
    await createUserWithEmailAndPassword(auth, email, password).then((result) => {
        console.log("success", result)
        results = result.user;
    }).catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        results = error;
    });
    return results;
}

/**
 * Sends an email verification to the user.
 */
// function sendVerificationEmailToUser() {
//     sendEmailVerification(auth.currentUser!).then(function () {
//         // Email Verification sent!
//         alert('Email Verification Sent!');
//     });
// }

// function sendPasswordReset() {
//     const email = emailInput.value;
//     sendPasswordResetEmail(auth, email)
//         .then(function () {
//             // Password Reset Email Sent!
//             alert('Password Reset Email Sent!');
//         })
//         .catch(function (error) {
//             // Handle Errors here.
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             if (errorCode == 'auth/invalid-email') {
//                 alert(errorMessage);
//             } else if (errorCode == 'auth/user-not-found') {
//                 alert(errorMessage);
//             }
//             console.log(error);
//         });
// }

// Listening for auth state changes.
// const onAuthStateChanged = (auth, function (user) {
//     if (user) {
//         // User is signed in.

//     } else {
//         // User is signed out.

//     }

// });

export { handleLogIn, handleSignUp };