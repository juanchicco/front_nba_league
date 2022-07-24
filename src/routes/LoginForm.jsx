import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage} from "formik";
import {Button,Alert} from '@mui/material'
import "../App.css"
import * as Yup from 'yup'
import NavBar from '../components/NavBar'

const LoginForm = () => {
    const [state,setState] = useState({error: false,loggedIn:false})
    
    const navigate = useNavigate()
    useEffect(() => {
        if (state.loggedIn) navigate('/')
    },[navigate,state.loggedIn])

    return (
        <>
            <NavBar/>
        <Formik
        initialValues = {{userName: "", password: ""}}
        validationSchema={Yup.object({
            userName: Yup.string().min(3,"Min character count 3").max(80,"Max character count 80").required("Required"),
            password: Yup.string().min(8,"Min character count 8").max(50,"Max character count 50").required("Required")
            })
        }>
        <Form className="containerForm" id="form"
        onSubmit={(e) => {
            e.preventDefault()
            const data = new FormData(document.getElementById("form"))
            const obj = {
                userName: data.get("userName"),
                email: data.get("email"),
                password: data.get("password")
            }
            fetch("https://nba-league-api.herokuapp.com/users/login",{
                method: "POST",
                headers: {
                    "Accept" : "application/json",
                    'Content-Type' : 'application/json' 
                },
                body: JSON.stringify(obj)
                })
                .then(res => res.json())
                .then(data => 
                    {if (data.status === 401) setState({error: true});
                    else {
                        setState({loggedIn: true})
                        localStorage.setItem("token", data.Token_info.token)}
                    }
                )
                .catch(err => console.log("ERRORR!!!" + err))
        }}
        >
            <h3>Register Form</h3>
            <div className="campo-form">
                <label htmlFor="userName">User Name</label>
                <Field name="userName" id="userName" type="text" placeholder="Ingrese un nombre de usuario" className="input" autoFocus/>
                <ErrorMessage component={Alert} severity="error" name="userName"/>
            </div>
            <div className="campo-form">
                <label htmlFor="password">Password</label>
                <Field name="password" id="password" type="password" placeholder="Ingrese contraseña" className="input"/>
                <ErrorMessage component={Alert} severity="error" name="password"/>
            </div>
            
            <Button  type="sumbit" variant="outlined" /*onClick={handleClick}*/>LogIn</Button>

            <p>¿Aún no estas registrado? <a href="http://localhost:3000/users/register">Sign Up</a></p>

            {state.error && <Alert severity="error">Credentials are invalid</Alert>}
        </Form>
        </Formik>
        </>
    )
}

export default LoginForm