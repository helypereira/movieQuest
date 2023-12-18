import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
//import token from "./config.js";

const API_URL = "https://api.themoviedb.org/3/search/movie?query=";
const trendingMovies = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

// const key = token;

if (!key) {
    console.error("Error: La variable de entorno MOVIEDB_TOKEN no está configurada.");
    process.exit(1); // Termina el proceso con un código de salida no exitoso (1)
}  

const key = process.env.MOVIEDB_TOKEN;

const config = {
    headers: { Authorization: `Bearer ${key}`},
};

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
    //res.render("index.ejs");
    try {
        const result = await axios.get(trendingMovies, config);
        // console.log(result.data);
        res.render("index.ejs", { trending : result.data });
    } catch (error) {
        res.render("index.ejs", { content: JSON.stringify(error.response.data) });

    }
});


app.post("/get-movie", async (req, res) => {
    try {
        const movieName = req.body.movie;
        const result = await axios.get(API_URL+movieName+"&include_adult=false&language=en-US", config);
        res.render("details.ejs", { content: result.data });
    } catch (error) {
        res.render("index.ejs", { content: JSON.stringify(error.response.data) });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
