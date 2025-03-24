
import './style.css';
//ionic dependencies
import { IonButton, IonContent, IonHeader, IonInput, IonItem } from '@ionic/react';
//react icons

import { FaEyeSlash } from "react-icons/fa";
import { IoChevronBackCircle } from "react-icons/io5";
import { FaEye } from "react-icons/fa";

import React from 'react';
function Login() {

    const [showPassword, setShowPassword] = React.useState(true);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <IonHeader >

            </IonHeader>
            <IonContent>
                <div className="login-container">
                    <div className="welcome-back">
                        <IoChevronBackCircle size={50} />
                        <h1>Welcome</h1>
                        <h2>Back</h2>
                    </div>
                    <div className="form-container">
                        <div className="logo-area">
                            <img src='./logo.svg' />
                        </div>

                        <form action="">
                            <IonItem style={{ '--background': 'transparent' }} className="no-border">
                                <IonInput className='ion-inputs' placeholder='Registration'></IonInput>
                            </IonItem>


                            <IonItem style={{ '--background': 'transparent' }} className="no-border">

                                <IonInput
                                    className='ion-inputs'
                                    placeholder='Password'
                                    type={showPassword ? 'text' : 'password'}

                                ></IonInput>

                                {showPassword ? (
                                    <FaEyeSlash
                                        size={20}
                                        color='#0464dc'
                                        className='ion-icon'
                                        onClick={handleShowPassword} />
                                ) : (
                                    < FaEye
                                        size={20}
                                        color='#0464dc'
                                        className='ion-icon'
                                        onClick={handleShowPassword} />
                                )}

                            </IonItem>
                        </form>

                        <IonButton className='ion-button' shape="round">Login</IonButton>

                        <div className="outer-methods">
                            <p>Other login methods</p>
                            <img src="https://logopng.com.br/logos/google-37.png" alt="" />
                        </div>
                    </div>
                </div>
            </IonContent>
        </>
    );
}
export default Login;