# testing-poc

## Read this
This poc was created to study how front-end tests work with vuejs and what are the principles for testing in front-end applications.

### What you should avoid with Testing Library
Testing Library encourages you to avoid testing implementation details like the internals of a component you're testing (though it's still possible). The Guiding Principles of this library emphasize a focus on tests that closely resemble how your web pages are interacted by the users.

You may want to avoid the following implementation details:

Internal state of a component
Internal methods of a component
Lifecycle methods of a component
Child components

### What you should test with Jest
Internal state of a component
Internal methods of a component
Lifecycle methods of a component
Child components

### What you should test with Testing Library
User interactions
Expected outcomes from the system after a user interacts with it

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
