---
title: >-
  Static Site Generators are not for me! My Experience with Jekyll, Hugo and
  NetlifyCMS
url: My story of static site generators
carn: none
date: 2019-09-18T07:25:35.755Z
tags:
  - Static Site Generators
  - Hugo
  - NetlifyCMS
  - Wordpress
---
My [previous post](https://dev.to/justaashir/bulma-the-most-underrated-framework-of-the-css-framework-era-2gj8) was a banger, I didn't know about the DEV's Power. My next post is here:

My writer friend ❤️ wanted me to make a website for him, he wants to upload his stories online and also want his Portfolio to be available online. So everyone knows what's the best option, available??[Wordpress](https://www.wordpress.org/), Hmm. It was easy to work but I made it complicated myself, I wanted to get going with the Trends, I have heard so many times about the Speed and efficiency of Static Site Generators, So it's my experience with them:

[Gatsby](https://www.gatsbyjs.org/) is the most popular Static Site Generator Right Now, But it's based on React and I don't know any JS Framework yet, and if you don't have good knowledge of [React](https://www.reactjs.org/), you can't use it. and so [Gridsome](https://www.gridsome.org/)(VueJs) you are also out.

[Jekyll](https://jekyllrb.com) supported by GitHub, one of the oldest Static Site Generator based on Ruby, learning it, is not the biggest problem, but you will get stuck in Installing it. After wasting your lot of time installing it, There is no principle of Clean Code in Jekyll. it's very cluttery - No more fuss about Jekyll, Let's move on

[Hugo](https://gohugo.io/) tagged the 'Most Easiest Static Site Generator', It's based on GoLang. I found it, it's installation was much easier than Jekyll. Try to find some good tutorials, but there is not much information available about Hugo Found these :
There [Docs](https://gohugo.io/documentation/) sucks! I didn't find any answer there! I stuck into many Problems but I figure them out! I decided to work with Hugo.

The next step was learning about making custom Theme of Hugo! But I didn't find a single video on YouTube about the total procedure from Scratch. I downloaded a Simple Theme from HugoThemes, and I tried to customize it and I finally did it. Now It's Time for applying the CMS. I chose [NetlifyCMS](https://www.netlifycms.org) cause it has Netlify in its name. So I push it on GitHub and in Netlify I made a build command for Hugo on every push, but what the duck! is Git Submodule for Theme? I tried to solve it but didn't find any answer so I copy all the /themes files into /layout folder so It became the default style. Now more problems are coming?

After all of this and very bad Filepath system of Hugo, I delivered a website to my friend which he creates new posts. And then He asked me that He want to change the Content of the homepage and also want to make some more pages by himself. I tried it but [_index.md](https://gohugo.io/content-management/organization/#index-pages-index-md) logic scares me! there was no option available for Static Pages Editing in Layouts Folder and Lot's of other options! Now I am not gonna back to Hugo.

What's going on with Docs? They are so shit?
I just wanted a static site generator to take my custom theme, make it accessible to edit every part of it by the user on CMS. Maybe it's possible in Gatsby, [VuePress](https://vuepress.vuejs.org) or [Gridsome](https://gridsome.org/) but I don't have much time to learn these frameworks. I am a designer. Then I also tried [11ty](https://www.11ty.io), it excites me due to direct usage of Javascript in it. There were also so many starter templates available, but I have wasted all of my time on Hugo, then I get back to the old and easiest way???? Wordpress.

That's All, Follow Me On Twitter : [twitter.com/justaashir](https://twitter.com/justaashir)
