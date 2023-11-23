import { useState } from "react";
//import chakra components here

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = () => {
    const [userData, setUserData] = useState({ email: "", password: "" });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [login] = useMutation(LOGIN_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleLoginSumbit = async (event) => {
        event.preventDefault();
    }










}