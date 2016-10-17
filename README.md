# typescript-lerna-webpack-sadness

## Issue

There is an issue that resembles https://github.com/Microsoft/TypeScript/issues/6496 but only seems to happen when running through Webpack. A local file defining a class with private members that is symlinked through multiple paths to a single ancestor with [Lerna](https://github.com/lerna/lerna) causes Webpack to error, claiming that

```
ERROR in ./src/index.ts
(4,9): error TS2345: Argument of type 'TestClass' is not assignable to parameter of type 'TestClass'.
  Types have separate declarations of a private property '_foo'.
```

when in fact it is the exact same file.

I use Lerna for managing a large monorepo full of different node modules, but I suspect this issue also repros just using `npm link`.

## Repro

```
npm install
npm start
```

This will (1) run Lerna to set the repo up, which has a dependency tree like this:

```
parent -> child
parent -> grandchild
child -> grandchild
```

`grandchild` implements a class with a private member variable. The dependency tree links `grandchild` through two routes in the tree, which is where the duplicated definitions come from.

Then it will (2) `cd` to the `parent` package and run a `tsc` build and a `webpack` build to illustrate the difference, namely, that it works in `tsc` but not in `webpack`.
