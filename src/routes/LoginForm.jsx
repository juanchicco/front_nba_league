import React from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import {Button,Alert} from '@mui/material'
import "../App.css"
import * as Yup from 'yup'
import NavBar from '../components/NavBar'

const LoginForm = () => {
    return (
        <body>
            <NavBar/>
        <Formik
        initialValues = {{userName: "", password: ""}}
        validationSchema={Yup.object({
            userName: Yup.string().min(3,"Min character count 3").max(80,"Max character count 80").required("Required"),
            password: Yup.string().min(8,"Min character count 8").max(50,"Max character count 50").required("Required")
        })
    }
        onSubmit = { (data) => {
            const obj = {
                userName: data.userName,
                password: data.password
            }
            console.log(JSON.stringify(obj))
            fetch("http://localhost:3030/users/login",{
                method: "POST",
                headers:{
                    "Accept" : "application/json",
                    'Content-Type' : 'application/json',
                },
                mode : "no-cors",
                body: JSON.stringify(obj),
                })
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                })
                .catch(err => console.log("ERROR" + err)
                )
            }
        }
        >
        <Form className="containerForm" id="form">
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
            
            <Button  type="sumbit" variant="outlined">LogIn</Button>

            <p>¿Aún no estas registrado? <a href="http://localhost:3000/users/register">Sign Up</a></p>
        </Form>
        </Formik>
        </body>
    )
}

export default LoginForm