# Introduction

The frontend for my Singapore michelin guide application.

# Personal Objectives

I started this project to force myself to learn the following:

- [React.js](https://reactjs.org/). For context, I have done all my frontend development in [Vue.js](https://vuejs.org/). So, it would be fun to get my hands dirty with what is currently the most popular frontend framework
- The [Material UI](https://mui.com/material-ui/getting-started/overview/) library. I have also somehow avoided using this UI library, despite it being one of the more popular UI libraries out there
- And of course, to have fun building stuff!

# Getting started [Dev]

1. Install `pnpm` on your local machine:

   > curl -fsSL https://get.pnpm.io/install.sh | sh -

2. Run `pnpm install` to install all project dependencies
3. Run `pnpm run dev` to run the project on your local machine

Note that in order to view this application, the [Michelin Guide backend](https://github.com/roycehoe/michelin-guide) should be running on your local machine too.

# Reflections

Here are some lessons I picked up along the way:

- There is no shame in copying code; but copy with the intention to learn, not to get things working. I believe we all do this at work. If I were working on a huge repo, I would refer to my predecessor's code when I am lost. Working on personal projects should be no different.
- Do not over-modularize and over-engineer. I have the tendency to build child components first, then assemble them into a parent component. However, while assembling my child components, I would realize that I overengineered my components. Also, when my designs change, I would need to throw away child components that no longer fit the design specifications. Ironically, I should be lazy, and break things up only if there is pressing need to.
- KISS; focus on one thing at a time. When building a frontend component, I should have mocked the data received from the backend. Assume the data is already there. Then build my frontend components. Then integrate my frontend with my backend.
- Skim through the documentation if you are using a new UI library. When I returned to this project after a long break, I started building my frontend without revising the components Material UI had to offer. As a result, I used components that were unfit for the task at hand.
