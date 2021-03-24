import React from 'react'
import { ScrollView, StatusBar } from 'react-native';
import LoginComponent from '../../components/Login';


const Login = () => {
    return (
        <ScrollView>
            <StatusBar 
            barStyle="light-content"
            backgroundColor="#1F4F4F"
            />
            <LoginComponent />
        </ScrollView>
    )
}



export default Login
