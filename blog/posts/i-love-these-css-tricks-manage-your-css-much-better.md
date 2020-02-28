---
title: I Love These CSS Tricks - Manage your CSS Much Better
url: Some CSS Tricks to get your work done.
date: 2019-10-06T07:40:03.683Z
carn: none
tags:
  - tricks
  - lists
  - css
---
I was a little busy around these days(School HomeWork), But I am writing this article today. These days I learned a lot about Design Systems [(Atomic Design)](https://bradfrost.com/blog/post/atomic-web-design/) I will definitely write a post about this. I was really wasting time choosing different design components but There are lots of [PatternLibraries](https://www.styleguides.io) available. Today I will share some CSS Tricks I am using Right now:
#### Titling the Sections
You can organize your CSS Sections Like This:

```html
\* ------------------------------- *\
      #SECTION-TITLE
  /* ----------------------------- */
```
The title of the section is prefixed with a hash (#) symbol to allow us to perform more targeted searches (e.g. grep, etc.): instead of searching for just SECTION-TITLE—which may yield many results—a more scoped search of #SECTION-TITLE should return only the section in question.

----
####Alignment
You can Align common or related declarations like this :

```css
.foo {
  -webkit-border-radius: 3px;
     -moz-border-radius: 3px;
          border-radius: 3px;
}
```
It can really help you understand properties better and easily readable.

----
#### Organizing Classes
This is not a CSS Trick but it's somehow related to CSS, and it will only work if you are using HTML attributes with quotes (single or double). 95% of coders use quotes for attributes for better support. You can organize CSS Classes by using [ ] Square Brackets.

```html
div class="[ box box-green] [ bio bio-long ]">
```

It will be really helpful to organize Custom Classes and Framework Classes differently.

#### Specificity and Readability
```css
ul.nav{}
/* ul*/.nav {}
```
We use CSS selectors to specify like this `ul.nav` or `div.nav`. But sometimes you can be stuck within the Specific Design. But you can use an approach like this `/*ul*/.nav`. It stills gives you the idea of what element you are using in DOM and improves the readability and increase the Specificity.

---
I just featured 3 tricks and they are really useful. You can read the entire Style Guide here [https://cssguidelin.es/](https://cssguidelin.es/). That's all There are some of The Information about me:
 - I'm kinda active on Twitter : [www.twitter.com/justaashir](www.twitter.com/justaashir)
