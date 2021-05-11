import React, { useState, useEffect, useContext } from "react";
import { Form } from "../components";
import { FooterContainer } from "../container/footer";
import { FirebaseContext } from "../context/firebase";
import { useHistory } from "react-router-dom";



export default function SignIn(){
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const { firebase } = useContext(FirebaseContext);
    const isDisabled = !email || !password;
    const history = useHistory();
    
    function handleLogin(e){
        e.preventDefault();

            firebase.auth()
                .signInWithEmailAndPassword(email, password)
                .then(()=>{
                    setEmail('');
                    setPassword('');
                    history.push("/");
                })
                .catch(err =>{
                    setError(err.message);
                    if(err.code === "auth/wrong-password"){
                        setPassword('');
                    } else {
                        setEmail('');
                        setPassword('');
                    }
                });

    }


    useEffect(()=>{
        document.title = "Login - Instagram";
    }, []);

    return (
        <>
            <Form>
                <Form.Container>
                    <Form.Image 
                        src="/images/iphone-with-profile.jpg" 
                        alt="iphone with instagram app" 
                    />
                    <Form.Wrapper>
                        <Form.Frame method="POST" onSubmit={handleLogin}>
                            <Form.Logo src="./images/logo.png" alt="Instagram logo" />
                            <Form.Input 
                                value={email} 
                                onChange={({ target }) => setEmail(target.value)} 
                                type="email" 
                                placeholder="Email Address" 
                            />
                            <Form.Input 
                                type="password" 
                                placeholder="Password" 
                                value={password}
                                onChange={({ target }) => setPassword(target.value)}
                            />
                            <Form.Button opacity={isDisabled ? "0.5" : "1"} disabled={isDisabled}>Log In</Form.Button>
                            <Form.Error>
                                {error}
                            </Form.Error>
                        </Form.Frame>
                        <Form.Frame>
                            <Form.Text>
                                Don't have an account? <Form.Link to="/signup">Sign up</Form.Link>
                            </Form.Text>
                        </Form.Frame>
                    </Form.Wrapper>
                </Form.Container>
            </Form>
            <FooterContainer />
        </>
    )
}