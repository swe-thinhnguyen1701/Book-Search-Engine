# Book Search and Save Application

## Description

This is a full-stack web application that allows users to search for books using the Google Books API and save their favorite books to a personal list. Users can create an account, log in using either their username or email, and manage their saved books.

## Features

- **User Authentication**: Users can sign up, log in, and log out. The application supports authentication using either a username or an email.
- **Search Books**: Users can search for books using the Google Books API.
- **Save Books**: Authenticated users can save books to their profile for future reference.
- **View Saved Books**: Users can view a list of books they have saved.
- **Remove Books**: Users can remove books from their saved list.

## Technologies Used

- **Frontend**:
  - React
  - React Bootstrap
  - Apollo Client

- **Backend**:
  - Node.js
  - Express.js
  - GraphQL
  - MongoDB
  - Mongoose
  - JSON Web Token (JWT) for authentication

- **Tools**:
  - Webpack
  - Babel
  - ESLint

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/book-search-app.git
   cd book-search-app
   ```

2. Install dependencies
    ```
    npm install
    ```

3. Run the application:
    ```
    npm run develop
    ```

## Usage

1.	Open your browser and navigate to http://localhost:3000.
2.	Create an account by signing up or log in using your username or email.
3.	Use the search bar to find books.
4.	Save books to your profile by clicking the “Save” button.
5.	View and manage your saved books by navigating to the “Saved Books” section.