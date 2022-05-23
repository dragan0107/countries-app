# **Countries app**

## [Click here for demo.](https://drip016.github.io/countries-app)

> ### In this project, I was provided with a design preview, style guide of the app and my task was to recreate the Front-end from scratch. The app communicates with the [REST Countries API v2.](https://restcountries.com/) to fetch the details about countries. Initially, the project was done in plain **`React`**, but then I completely updated all the components in **`TypeScript`** and I tried to use it as much as I could. It was a good opportunity to learn and use **`TypeScript`** for the first time, and see the benefits it offers.

---

## Technologies used:

> ### The app is fully made in **`React`** with **`TypeScript`** and **`SASS`**, and no external packages were used apart from **`axios`** for data fetching.

## Functionalities:

- On initial run, it shows all countries.
- Countries can be filtered by continents.
- Countries can also be searched by their name.
- Implemented **_debouncing_** for the search input to optimize the app.
- By clicking on a country card, user is taken to the second page showing more details about the country itself, from which user can also return back to the previously visited page.
- **Border country** card on the second page, takes to the details page as well.
- User can toggle between Dark / Light mode which persists on page reload.
- App is fully responsive for all screen sizes.
