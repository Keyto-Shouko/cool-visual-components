# Cool Visual Components

This repository acts as a gallery that stores visual components like loadbards, cursors etc. for everyone to use
Feel free to contribute !

Here is the [Gallery](https://cool-visual-components.vercel.app/) if you want to check what is already done.

**Table of contents:**

- [Introduction](#introduction)
- [Getting started](#getting-started)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)
- [Thanks](#thanks)

## Introduction

All this comes from a school project. I needed an idea for an open source project so i did this repository.

It will serve as a gallery for visual components people may use later. Since it's a gallery you can also show how talented and creative you are !

## Getting started

Install `cool-visual-components` using your favorite package manager

```shell
# using npm
npm install cool-visual-components

# using Yarn
yarn add cool-visual-components

# using pnpm
pnpm add cool-visual-components

# using Bun
bun add cool-visual-components
```

Once done head to your main html file (probably index.html), and add this

```html
<div id="yourID"></div></td>
```

Then require the package in your the js file you're using with your html

```js
import { Circle } from "cool-visual-components"; //import the package
import "cool-visual-components/dist/lib/cool-visual-components.css"; //import the style

let myVar = new Circle(document.getElementById("yourID"));
myVar.draw();
myVar.changeLiquidColorOnPercentage(50);
```

And you're done !

You can also check the doc for other components [here](./doc/componentDoc.md)

## Documentation

As featured in the [contributing](https://github.com/Keyto-Shouko/cool-visual-components/blob/main/.github/CONTRIBUTING.md) file, the documentation will evolve with the components added to it.
Check the doc [here](https://github.com/Keyto-Shouko/cool-visual-components/blob/main/doc/componentDoc.md#circle-with-wave-effect)

## Contributing

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Keyto-Shouko/cool-visual-components/issues)

Use [Github issues](https://github.com/Keyto-Shouko/cool-visual-components/issues) for any requests.

Pull requests are welcomed, learn how to [contribute](https://github.com/Keyto-Shouko/cool-visual-components/blob/main/.github/CONTRIBUTING.md).

### Changelog

Changes are tracked as [Github releases](https://github.com/Keyto-Shouko/cool-visual-components/releases).

### License

This project is [MIT-licensed](./LICENSE).

### Thanks

[Alban Crepel](https://github.com/AlbanCrepel) for the introduction to the Open Source world.

[Jérémy Laurent](https://github.com/PoulpY2K) for his support and ideas.

[Benjamin Marques](https://github.com/Benji22ben) for his help during the coding phase

[Gallery]: https://cool-visual-components.vercel.app/
[README.md]: https://github.com/Keyto-Shouko/cool-visual-components/blob/main/README.md
[issue]: https://github.com/Keyto-Shouko/cool-visual-components/issues
[pull request]: https://github.com/Keyto-Shouko/cool-visual-components/pulls
