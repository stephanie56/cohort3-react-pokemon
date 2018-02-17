## Gotta Fetch 'em all!

For this homework assignment we'll be creating an app that fetches information about
a pokemon based on user input and displays it.

### Setup

1. Fork this repo
2. Create a folder with your first and last name (e.g. `arya-stark`)
3. Run `create-react-app` in that folder. This is where your app will live.

### Assignment

* Create a header component that should read `Gotta Fetch em all!` through props
* Create a Pokemon display component that displays the image of the Pokemon and it's name
* Create a text input component
* Create a button component
* Use all of the components to make an API call based on what the user input's into the component when the button is clicked

### Pokemon API

We'll be leveraging the `fetch` API and the [pokeapi](https://pokeapi.co/docsv2/#pokemon-section) to get our Pokemon data. You can use the `name` prop to display the name and the `pokemon.sprites.front_default` to display the picture.

The endpoint we're going to be using is `https://pokeapi.co/api/v2/pokemon/:nameOrId` where `nameOrId` should come from the user input field.
