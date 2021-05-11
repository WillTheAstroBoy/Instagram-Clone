import React, {useContext, useEffect, useState} from "react";
import { Form } from "../components";
import { FooterContainer } from "../container/footer";
import { FirebaseContext } from "../context/firebase";
import { useHistory } from "react-router-dom";
import { doesUsernameExist } from "../services/firebase";


export default function Signup(){
    const { firebase } = useContext(FirebaseContext);
    const [ email, setEmail ]  = useState('');
    const [ password, setPassword ] = useState('');
    const [ name, setName ]  = useState('');
    const [ username, setUsername ] = useState('');
    const [ error, setError ] = useState('');
    const history = useHistory();
    
    const isDisabled = !password || !email || !name || !username ;

    async function handleSubmit(e){
        e.preventDefault();

        const usernameExist = await doesUsernameExist(username);

        if(!usernameExist) { 
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((result) =>
                    result.user
                    .updateProfile({
                        displayName: username,
                        fullName: name
                    })
                    .then(()=>{
                        setName('');
                        setUsername('');
                        setEmail('');
                        setPassword('');
                        setError('');  
                        
                        firebase
                        .firestore()
                        .collection('users')
                        .add({
                            userId: result.user.uid,
                            username: username.toLowerCase(),
                            name,
                            email: email.toLowerCase(),
                            following: ['2'],
                            followers: [],
                            dataCreated: Date.now()
                        });
                        history.push("/signin");
                    })
                ).catch(err => setError(err.message));
        } else {
            setPassword('');
            setUsername('');
            setError("This username already exist please user another one.");
        }

    }

    useEffect(()=>{
        document.title = "Sign up - Instagram";
    }, [])

    return (
        <>
            <Form>
                <Form.Container>
                    <Form.Wrapper>
                        <Form.Frame method="POST" onSubmit={handleSubmit} >
                            <Form.Logo src="./images/logo.png" alt="Instagram logo" />
                            <Form.BoldText>Sign up to see photos and videos from your friends.</Form.BoldText>
                            <Form.Button type="button">Log in with Facebook</Form.Button>

                            <Form.Input 
                                type="email" 
                                placeholder="Email"
                                value={email}
                                onChange={({ target }) => setEmail(target.value)}
                            />
                            <Form.Input 
                                type="text" 
                                placeholder="Full Name" 
                                value={name}
                                onChange={({ target }) => setName(target.value)}
                            />
                            <Form.Input 
                                type="text" 
                                placeholder="Username" 
                                value={username}
                                onChange={({ target }) => setUsername(target.value)}
                            />
                            <Form.Input 
                                type="password" 
                                placeholder="Password" 
                                value={password}
                                onChange={({ target }) => setPassword(target.value)}
                            />
                            <Form.Button opacity={isDisabled ? 0.5 : 1} disabled={isDisabled}>Sign up</Form.Button>
                            <Form.Error>{error}</Form.Error>
                            <Form.Text>By signing up, you agree to our <strong>Terms, Data Policy</strong> and <strong>Cookies Policy</strong>.</Form.Text>
                        </Form.Frame>
                        <Form.Frame>
                            <Form.Text>Have an account? <Form.Link to="/signin">Log in</Form.Link></Form.Text>
                        </Form.Frame>
                    </Form.Wrapper>
                </Form.Container>
            </Form>
            <FooterContainer />
        </>
    )
}