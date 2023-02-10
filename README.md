# Introduction

The frontend for my Singapore michelin guide application. I might want to revisit this project in future. For now, perfect is the enemy of good.

# Personal Objectives

I started this project to force myself to learn the following:

- [React.js](https://reactjs.org/). For context, I have done all my frontend development in [Vue.js](https://vuejs.org/). So, it would be fun to get my hands dirty with what is currently the most popular frontend framework
- The [Material UI](https://mui.com/material-ui/getting-started/overview/) library. I have also somehow avoided using this UI library, despite it being one of the more popular UI libraries out there
- [Google Cloud](https://console.cloud.google.com/) APIs, specifically their Maps API
- And of course, to have fun building stuff!

# Getting started [Dev]

1. Install `pnpm` on your local machine:

   > curl -fsSL https://get.pnpm.io/install.sh | sh -

2. Run `pnpm install` to install all project dependencies
3. Run `pnpm run dev` to run the project on your local machine

Note that in order to view this application, the [Michelin Guide backend](https://github.com/roycehoe/michelin-guide) should be running on your local machine too.

# Reflections

Here are some lessons I picked up along the way:

- There is no shame in copying code;

But, copy with the intention to learn, not to get things working. I believe we all do this at work. If I were working on a huge repo, I would refer to my predecessor's code when I am lost. Working on personal projects should be no different.

- Do not over-modularize and over-engineer

I have the tendency to build child components first, then assemble them into a parent component. However, while assembling my child components, I would realize that I overengineered my components. Also, when my designs change, I would need to throw away child components that no longer fit the design specifications. Ironically, I should be lazy, and break things up only if there is pressing need to.

- KISS; focus on one thing at a time

When building a frontend component, I should have mocked the data received from the backend. Assume the data is already there. Then build my frontend components. Then integrate my frontend with my backend.

- KISS; Do things the stupid way

I definitely overengineered my menu bar component. I wanted it to be made of only drop downs. On selection, the dropdowns would auto-update the michelin cards. It is a little cooler than a form, but a PITA to make, and now my application can only filter OR sort, and not both. I should have stuck with a simple form with a [modal component](https://mui.com/material-ui/react-modal/) like on [propertyguru's filter button](https://www.propertyguru.com.sg/property-for-sale?market=residential)

- Skim through the documentation if you are using a new UI library

When I returned to this project after a long break, I started building my frontend without revising the components Material UI had to offer. As a result, I used components that were unfit for the task at hand.

- Learn and get inspired from the best

I was stuck for an inordinate amount of time. It turns out, I did not structure my repository properly, which caused me to be confused most of the time. Messy repo structure means messy code, messy imports, and slower progress. Thanks to [Nik](https://github.com/niktay), my mentor and friend, who linked me Jian Jie's [NUS reviews project](https://github.com/liaujianjie/nusreviews), his repo gave me a starting point to redesign my own repo.

- Know when to stop working

I need to work on speed. This project was slow because I was unfocused, and kept getting distracted by implementing feature after feature. If watching [OGP's 2022 hack for public good](https://www.open.gov.sg/hackathon/2022/) taught me anything, the prototypes that stuck weren't prototypes that were feature rich. Instead, it was the prototypes that had a clear problem to solve, did just a few things, but did those things spectacularly. That is the quality of my projects I should aim for from here on out.
