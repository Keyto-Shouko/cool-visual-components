# cool-visual-components

This repo will store some cool visual components like loading bars, mouse cursors etc

# Steps for basic usage with yarn :zap:

You can use yarn or npm, it will work the same way

```bash
yarn install # install dependencies
yarn dev # launch development server
yarn build # build the lib and the preview app to test it
```

# Once you installed the package you can follow those steps :

- In your html create a div with the class "circleWrapper"
- In the js file used by your html set a variable with this -> let yourVar = new Circle(document.getElementById("circleWrapper"));
- Then call the method draw() in your variable like this -> yourVar.draw();

There is also an option to change the color of the liquid based on a number (later this number will make the circle more or less full) :

- Call this method on your variable like this -> yourVar.changeLiquidColorOnPercentage(X) (where X is between 0 and 100)
