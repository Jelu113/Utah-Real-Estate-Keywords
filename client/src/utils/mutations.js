import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
    }
`;


export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_KEYWORD = gql`
    mutation addKeyword($input: KeywordInput!) {
        addKeyword(input: $input) {
                _id
                keyword
                statute
                statuteURL
                citations {
                    section
                    laws
                    sublaws
                }
        }
    }
`