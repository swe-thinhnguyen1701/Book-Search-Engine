import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation login($identifier: String!, $password: String!){
        login(username: $identifier, email: $identifier, password: $password){
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!){
        addUser(username: $username, email: $email, password: $password){
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($book: BookInput!){
        saveBook(book: $book){
            _id
            username
            savedBooks {
                bookId
                title
                authors
                description
                image
                link
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!){
        removeBook(bookId: $bookId){
            _id
            username
            savedBooks {
                bookId
                title
                authors
                description
                image
                link
            }
        }
    }
`;