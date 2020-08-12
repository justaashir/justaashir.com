---
title: Bulma + Vue = Easy Setup
url: How to setup Bulma with Vue
carn: /
description: >-
  Bulma is very customizable and modular as they say, You can easily integrate it into VueJS workflow. It's not like just using the cdnjs version, you can customize the SaSS variables to give Bulma your own theme or almost control everything from the border's color to the table header's padding with Bulma SaSS variables.
date: 2019-10-31T07:54:29.295Z
tags:
  - vue
  - bulma
  - setup
---
I am learning VueJs nowadays and it's Awesome! VueJS community is very strong, I think I can also contribute to it by writing this post.

[Bulma.css](http://bulma.io) is the main driver right now to make responsive designs and it's very customizable and modular as they say, You can easily integrate it into VueJS workflow. It's not like just using the cdnjs version, you can customize the SaSS variables to give Bulma your own theme or almost control everything from the border's color to the table header's padding with Bulma SaSS variables.

#### 1 . You have to install VueJs with CSS Preprocessors Sass with Node-Sass or Dart-Sass

You can read this beautifully written article : [https://dev.to/helleworld_/integrating-dart-node-sass-in-vuejs-4o39](https://dev.to/helleworld_/integrating-dart-node-sass-in-vuejs-4o39)

#### 2 . Install Bulma First

Na Na Na, the CDNJS will not work here. you have to install it through npm :

```
    npm install bulma
```

OR

```
   yarn add bulma
```

Now Check out the `package.json` you will find Bulma there in dependencies

#### 3. Now you can create a folder or place the SaSS file in `/assets`

make a file named whatever and place wherever in `/src' with`.scss` file extension.

#### 4. Open the Sass File and setup Bulma

you can import the sass file of Bulma from `/.node-modules` into this file like this and customize it, you have to set Bulma [Variables](https://bulma.io/documentation/customize/variables/) before importing Bulma like this. Provide the right path from node-modules ![Setup Bulma Carbon](https://thepracticaldev.s3.amazonaws.com/i/hdtbma337wcz4318ad51.png)

#### 5 . Connect it to your VueJs App

I don't know if it's the right way to connect the Bulma with VueJs, but it's working fine for me. By this, you don't have to care about the generated CSS files or sass loader. In this way, you can connect your Bulma and sass: \*\*You have to provide the exact path to your file. In My Case it is

```
require('./scss/main.scss');
```

There is another thing called [Buefy](https://www.buefy.org), Ali wrote a fantastic post about this : <https://dev.to/aligoren/bulma-based-ui-components-for-vuejs-41i4>.

Bye Bye, I'm active on Twitter : [https://www.twitter.com/justaashir](https://www.twitter.com/justaashir)

Also go read how [Renetal](https://renetal.com) is helping rental businesses to digitize their operations seamlessly
