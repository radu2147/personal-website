# Personal website tempalte

This website template is a partial remake of [dorota1997's template](https://github.com/Dorota1997/react-frontend-dev-portfolio) using Svelte. 


## Get started

Install the dependencies...

```bash
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

## Runnning tests

By default cypress is used to write and run tests. Make sure you run the command:

```bash
npx cypress open
```

to open the web interface for cypress and create and run tests

To run tests from cmd line, simply run:

```bash
npm run test
```

## Formatting the code


To format the code just run

```bash
npm run format
```

This ill use `pretty` to make the code better indented and also lint the code using eslint

## Deploying to the github pages

To deploy to github pages, simply run

```bash
npm run deploy
```

This should deloy to gh-pages branch, which you should use when serving the website
