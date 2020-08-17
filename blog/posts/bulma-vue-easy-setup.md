---
title: Bulma and Vue JS - How to install and customize with ease
description: In this post, I shared how you can integrate bulma css framework in
  Vue Js. If you're using VueJS, you may find it hard to install bulma with
  customization options.
url: bulma-vue-js-installation
carn: /
date: 2019-10-31T07:54:29.295Z
tags:
  - vue
  - bulma
  - setup
---
 **Bulma** is a free, open-source CSS framework based on  **Flexbox** and used by more than  **200,000**  developers. It's the easiest to learn (my opinion) due to its natural naming of classes and a simple grid system. It's not that popular like Bootstrap, but it got a specific fanbase.

Today's post is not about Bulma's benefits or usage. It's more specifically about the integration of Bulma and VueJS.

## How to use Bulma with VueJS

There are several ways to **get started** with Bulma. You can either:

1. use  **npm**  to install the Bulma package (Recommended - Customizable)
2. use the  **jsDelivr CDN**  to link to the Bulma stylesheet (cannot be customized)

### 1. Integration Bulma using npm

It's my personal recommendation to use the Bulma in VueJS this way, because of some benefits that you'll not get another way around.

* You can customize colors, breakpoints, type, and custom imports to decrease the file size.

This is only possible if we set up a Sass workflow in our project, because of Bulma's nature.

So Here we go:

#### Installing Bulma

1. Install these required dependencies (If it already doesn't exist in your project):

```
npm install --save-dev node-sass sass-loader
```

 You can also read this [in-depth post](https://dev.to/helleworld_/integrating-dart-node-sass-in-vuejs-4o39) about it, if you don't understand this or want more detail installation.

2. Install Bulma through npm/yarn:

```
npm install bulma
```

3. You can now review your `package.json` to see the changes.

#### Adding to the project

It's super opinionated to import Bulma to the project, but this way works best for me:

1. Create a `main.scss` in the /assets folder.
2. In this `main.scss` file paste this code:

```
// Customizations Here (Optional)

// Bulma Import
@import '~bulma';
```

3. Add this file in `main.js` of your project like this:

```
require('@/assets/main.scss');
```

You're all good, now. Just start the local development server and check Bulma working on your website.

#### Video Tutorial

Coming Soon!

### 2. use the  jsDelivr CDN  to link to the Bulma stylesheet (cannot be customized)

This is the easiest way to integrate Bulma into your project (Vue or HTML/CSS) but you'll not able to [customize](https://bulma.io/documentation/customize/) anything in this way. You'll get a complete build of Bulma.

So here is how you can add through CDN:

1. Copy this, or retrieve the [latest version of Bulma from JSDelivr](https://www.jsdelivr.com/package/npm/bulma?path=css):

```
<link href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css">
```

2. Go  to the /public directory and paste this in `index.html`

Restart the local development server, and start using Bulma 🙌.

- - -

### Customization (Bonus)

This is the bonus chapter of this post, where I will shortly mention the effects of customization in Bulma, and how you can customize it. 
Bulma is natively written in Sass, so you need a Sass workflow to customize it using Variables which is only possible if you're using the `npm` 

#### Basic Customization

```
@charset "utf-8";

// Import a Google Font
@import url('https://fonts.googleapis.com/css?family=Nunito:400,700');

// Set your brand colors
$purple: #8A4D76;
$pink: #FA7C91;
$brown: #757763;
$beige-light: #D0D1CD;
$beige-lighter: #EFF0EB;

// Update Bulma's global variables
$family-sans-serif: "Nunito", sans-serif;
$grey-dark: $brown;
$grey-light: $beige-light;
$primary: $purple;
$link: $pink;
$widescreen-enabled: false;
$fullhd-enabled: false;

// Update some of Bulma's component variables
$body-background-color: $beige-lighter;
$control-border-width: 2px;
$input-border-color: transparent;
$input-shadow: none;

// Import only what you need from Bulma
@import "../node_modules/bulma/sass/utilities/_all.sass";
@import "../node_modules/bulma/sass/base/_all.sass";
@import "../node_modules/bulma/sass/elements/button.sass";
@import "../node_modules/bulma/sass/elements/container.sass";
@import "../node_modules/bulma/sass/elements/title.sass";
@import "../node_modules/bulma/sass/form/_all.sass";
@import "../node_modules/bulma/sass/components/navbar.sass";
@import "../node_modules/bulma/sass/layout/hero.sass";
@import "../node_modules/bulma/sass/layout/section.sass";
```

#### Result:

![Bulma customized](https://bulma.io/images/customize/custom-bulma-03-styled.png "Bulma Customized Screenshot")

This is it, and voilà! You've managed to install and customize Bulma.

*Thanks for reading this post, if you liked it, Share it on Twitter and tag me. Don't forget to [follow me](https://twitter.com/justaashir) there.*