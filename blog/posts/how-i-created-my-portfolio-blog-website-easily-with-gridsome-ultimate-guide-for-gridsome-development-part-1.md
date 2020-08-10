---
title: >-
  How I created my portfolio + blog website easily with Gridsome - Ultimate
  guide for Gridsome development  Part 1
url: part-1-gridsome-ulitmate-guide-2020
carn: none
description: >-
  I have successfully created my website with Gridsome, and I'm really happy with it. I chose Gridsome because I wanted a stable solution where I can get all the features and it should be flexible enough to fill up my needs. I wanted to integrate it with Vue.
date: 2020-01-30T14:57:39.018Z
tags:
  - gridsome
  - series
  - vuejs
  - static site generators
---
I have successfully created my website with [Gridsome](https://www.gridsome.com), and I'm really happy with it. I chose Gridsome because I wanted a stable solution where I can get all the features and it should be flexible enough to fill up my needs. I wanted to integrate it with Vue. There were other options like [Nuxt.js ](https://www.nuxtjs.org)and [Vuepress ](https://vuepress.vuejs.org/)and some other non-Vue options like [11ty ](https://www.11ty.dev/)and [Hugo ](https://gohugo.io/) but Gridsome was looking promising to me, So I gave it a try and this is my final experience.

### Gridsome Docs are Boring

This is just my personal opinion, I didn't like the [docs](https://gridsome.org/docs/). It will not help you while creating a real-world example.  please contribute to the docs to improve it if you can.

### The best way to use Gridsome.

This is my personal opinion. if you're looking to make a simple blog with markdown and you do care about custom design, don't use any starter because you'll get scared of lots of unfamiliar things.  just use a simple boilerplate with no-design. It will take you a lot much time to modify things than setup from scratch.

1. First Create your whole blog project in Vue with all the design and things setup.
2. later it will just take you 15-20 minutes to integrate gridsome, follow the tutorial below.

Let's begin here...

### Install Gridsome first

First install the latest version of gridsome cli and wait for it to install correctly.

**NPM:** `npm install --global @gridsome/cli`

**Yarn:** `yarn global add @gridsome/cli`

#### Generate a new project

first make sure you've installed gridsome and then generate a new project by running this:

`gridsome create my-website`

It will then create a new folder with the gridsome installed. what it exactly do is clone the repository and then delete the .git and .gitignore for you and run a npm install.

##### Some problems usually happens in this step:

 Sometimes you've to install npm install yourself  by going into the folder.
 This can throw some errors like `libpng-dev` and some `python`, so you just have to install the windows build tools.

   `npm install --global --production windows-build-tools`

### Setup all the configurations

1.  first open the `/src` folder, and then import your css files and other dependencies as you do in `main.js` . if you use sass/scss then you've to run this command first\
   `npm install -D sass-loader node-sass`
2. if you want to insert some links and meta tags or script files then you can override the default html file like this:

```html
<!DOCTYPE html>
<html ${htmlAttrs}>
<head>
${head}
<link rel="author"href="https://twitter.com/justaashir"/>
<meta name="viewport"content="width=device-width, initial-scale=1.0">
<link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajaxlibsfont-awesome/5.11.2/css/all.min.css">
</head>
<body ${bodyAttrs}>
${app}
${scripts}
<script src="hello.js"></script>
</body>
</html>
```
3.  Before moving forward you must install two plugins for gridsome, one is for converting markdown to html and other is the file-system.

   `npm install @gridsome/transformer-remark `

   `npm install @gridsome/soruce-filesystem`
4.  In the root folder there is a file named `gridsome.config.js` it's the most important file in the gridsome, here you'll be controlling everything in your app. open the file and the copy this code.

```js
module.exports = {
        siteName: "Justaashir - Aashir Aamir Khan Official Portfolio & Blog",

        siteDescription:
          "Aashir Aamir Khan, Front End Web Developer & Writer. Designing perfect UI solutions with VueJS.",

        siteUrl: "https://www.justaashir.com",

        plugins: [
          {
            use: "@gridsome/source-filesystem",

            options: {
              path: "posts/**/*.md",

              typeName: "Post",

              remark: {},

              refs: {
                tags: {
                  typeName: "tag",

                  create: true
                }
              }
            }
          }
        ],

        // This depends on the templates folder and set the url

        templates: {
          Post: ":title",

          tag: "/tag/:id"
        },

        // Adds markdown support to all file-system sources

        transformers: {
          remark: {
            externalLinksTarget: "_blank",

            externalLinksRel: ["nofollow", "noopener", "noreferrer"],

            anchorClassName: "icon icon-link",

            plugins: ["@gridsome/remark-prismjs"]
          }
        }
      };
```



That's all for the first part , you have to wait a little for the second part where I'll explain how to setup the templates and query the post with front-matter.

In 3rd part we'll finalize the website and deploy it on Netlify and setup a netlify form.

In 4th part we'll setup Netlify CMS for it.


See you!
