This repository hosts a web application for movie search developed in Node.js using the Express framework. The application allows users to explore the most popular movies of the day and retrieve details about specific movies. Information is obtained through requests to The Movie Database (TMDb) API with authentication via an access token.

Key features:

1. **Popular Movie Search:** The application's homepage displays the most popular movies of the day using the TMDb trending API.

2. **Movie Details:** Users can search for specific movies through a form. Upon submission, the application queries the TMDb search API and displays detailed information about the selected movie.

3. **Error Handling:** The application handles potential connection errors with the TMDb API, providing detailed error information to the user.

The source code employs modern technologies such as Axios for handling HTTP requests and Express as the framework for server development. Additionally, an EJS template system is implemented for dynamically rendering views.

Feel free to explore, contribute, and enhance this movie search application!
