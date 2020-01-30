---
title: Amezmo - The modern tool for PHP app hosting and it's amazing
url: Amezmo - PHP app hosting platform
date: 2019-11-13T07:56:38.738Z
tags:
  - php
  - tools
  - hosting
---
PHP is the most popular language right now, because of WordPress. Let’s talk about the steps from start to end:

1. You developed a PHP app on your Local Development Environment.
2. You want others to use it, so you want to deploy it on servers.
3. You checked out, but deployment is so time-consuming, you have to set up the whole server on your own, install all the things and there are so many problems that may come in your way, after deployment.
4. So you tried a hack and tried to edit files directly into the server using FTP to avoid the deployment every time! But it breaks your app and there is no version control and you can’t work without git.
5. Deployment is adding so many steps in your existing workflow, you really don’t need it.
6. Don’t compromise with deployment ever; it’s wasting your time and energy.
Problems are Endless :

PHP is from 1994, and we are here in 2019. Many things have been changed since then. We have so many tools, web browsers, version Control services, hosting providers. But most of the people are still using FTP for uploading their files on the server.
It’s the easiest and cheap way to deploy, but it’s like a messenger. What about so many scripts to run on every deployment, and server memory and performance and security HuuH!

It’s 2019, where is the automation thing in PHP? It’s here in so many ways! But it's expensive! So expensive that it can easily fill up your credit card limit and the problem is that you don’t want to add any extra step for deployment in your Development Environment.
Hosting services are targeting the users, not directly the developer’s community. So they lack behind providing the latest versions of modern technologies.

What about Security?, you have to manage all the SSL, firewalls and all the things on your own. Do you have time for this?
 Don’t get scared, and We are not here to scare you!

Private servers are so expensive and the problems with Shared Hosting are endless! performance, security, data Access, dedicated Memory??? Containers are the most advanced and cheap option available to avoid all of these problems, but it’s not easy to implement on your own.

So Let’s Summarize that if you need to work with servers and all the deployment stuff, you will need a lot of time or a lot of $$$.
The solution in 2019 :
What if I tell you about a Service or Tool that will take all of your deployment stuff and automate it, for a very reasonable price?? This sounds good! but you can also manage, scale and do many more things in a single GUI Web-Based Tool.

Tada✨ We give you:
### [Amezmo](https://www.amezmo.com/)
The modern tool to automate your deploy process, so you focus on your apps not servers. Just Connect your‌ Github, and Amezmo will deploy it to an internal domain, with Private Subnet IP.
There is no extra step for deployment.  you just push your code, and we at Amezmo handle all the servers.

####Doesn’t it sound like Netlify?
 Yes, we are like Netlify but for dynamic applications, PHP and databases. You may know that Netlify only supports static websites, so no PHP and databases.

Amezmo is directly targeting the PHP deployment and you can perform all of the tasks, with our Modern Web GUI Dashboard and we think that GUI is much easier for deployment.
You can manage databases, add domains, scale applications, view all the details of your PHP sites in the dashboard. We are doing so much for you then you expect. No downtime at all, Always online and our software team is working all the time to support the latest versions of all the Technologies PHP, Node, Redis, and MySQL. It doesn’t mean that we are dropping the older versions, All the versions are available and ready to work.

#### What about Networking?
Networking is the most complicated stuff, and we care about all of our customer’s security. Each of your apps gets its private subnet and you can easily share dedicated services inside your subnet and by this, there is no need for firewall now, you don’t need to add any file or settings for SSL certificate, we will handle all of this for you. Every PHP app deployed on our servers has original SSL certificates from the start by [Let’s Encrypt](https://letsencrypt.org/).

You can also launch a worker or queue process easily with one click if you're in that stuff, Amezmo starts and monitors your queues and workers.

Amezmo will also save your last 4 of the success deployments releases, so you can easily rollback in any scenario, Amezmo can do much more than you think. you can use it as a perfect deployment automation tool, run Hook Scripts and create other instances, That’s why we used to say that “Amezmo is Amazing!” and we are also open for any type of feedback and improvement,
We want to provide a lovely experience to our users, you can check out the [transparent pricing of Amezmo](https://www.amezmo.com/pricing). 

#### Here’s how you can [deploy your first PHP app on Amezmo](https://www.amezmo.com/register):

1. First Log-in with your credentials to visit the Amezmo Dashboard:
 ![Amezmo - Deploy Your First Application](https://thepracticaldev.s3.amazonaws.com/i/qz8e6qdfq2y512l7g7v7.png)

2. Here we can create your first instance easily: 
 ![Amezmo - Deploy PHP easily](https://thepracticaldev.s3.amazonaws.com/i/4mgveamkctdm9fflacr6.png)

3. Here we will enter our app’s name which is “first-php-app” and you don’t have a domain yet, you can use ‘database.internal’ just for now, but we can definitely add a custom domain later: 
![Amezmo Deploy PHP](https://thepracticaldev.s3.amazonaws.com/i/im9ok6o2zyvgfeyn7n1b.png)

4. We will specify the version of PHP, we want to use. We support almost all versions, but we are going to use the latest: 7.4, we can also set up  our database here with MySQL, and we are going to use Redis, so it’s checked if you don’t want to use MySQL or Redis you can simply uncheck them :
![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/1fxyaamrsznq0azplkc5.png)

5. Our app is ready after a few seconds, with all the things installed and set up! Really :
![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/299s75b4apg9xf0bm1bo.png)


6. #### Installing Composer Dependencies
We can easily install composer plugins or NPM dependencies, Amezmo supports this out of the box with Deployment Hooks, and it had already installed composer for you.
 - Go to your repository and create the file  .amezmo/after.pull
 - Here you can install any NPM or Composer plugin by following this pattern: 

![A](https://thepracticaldev.s3.amazonaws.com/i/mqq5jd5k9hbt5kik8k8z.png)



 - 7 Now we have to import our Github Repository to automate deployment on every push. We have authenticated our account and imported the new repository:

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/itecfmfi8i6pd641i9g1.png)

 - 8. While Importing Repository, we can specify your application type :

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/5lt4qcbqentvpopk8te8.png)

 
 - 9. We want the deployment on every push so we chose YES:

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/wq4wb8865bspuzmirmci.png)


 - 10. Then no further steps and our App is deployed now, you can visit it on your domain if you verified it, or internal domain.

It’s a piece of cake, to deploy applications with Amezmo. It’s much better than all the old methods available, and we are saying again that :
*“You Could Setup Servers with Continuous Deployments on your own or you could save your precious time by switching to Amezmo.”*
Deploy your PHP app on Amezmo now, [get a 30-day free trial here](https://www.amezmo.com/register).


##### Maybe you have a question in your mind that How can I trust a new company and pay?
 Customer’s trust is almost everything for us, that’s why we are providing the 30-day free trial and you don’t have to give us your credit card details, you can try Amezmo and we are confident that you will like it more than anything. 

#### Quick Links
 - Official Website of [Amezmo](https://www.amezmo.com/).
 - [Docs](https://www.amezmo.com/docs)
 - [Pricing of Amezmo](https://www.amezmo.com/pricing)
 - Deploy your PHP app on Amezmo now, Get a free 30 day trial - No Credit Required at all [get a 30-day free trial here](https://www.amezmo.com/register).

**This is a promotional post**
