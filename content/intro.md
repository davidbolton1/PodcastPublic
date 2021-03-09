---
title: "Learning Cypress Pt. 1"
slug: "first-episode"
cover: "logo.png"
date: 2021-03-05
audioPath: episodeone.mp3
episodeNumber: 000
fileSize: 4.8
showLength: 15:24
category: "tech"
shortDescription: "Intro"
tags:
    - programming

---

### First episode!

A quick bio and then on to the setup of Cypress!

Commands used(Gatsby):
Installation: npm install --save-dev cypress start-server-and-test


Create a cypress.json and put this in it:
{
  "baseUrl": "http://localhost:8000/"
}

For Continuous Integration, use cy:run instead of cypress:open
{
  "scripts": {
    "develop": "gatsby develop",
    "cy:open": "cypress open",
    "cy:run": "cypress run",
    "test:e2e": "start-server-and-test develop http://localhost:8000 cy:open",
    "test:e2e:ci": "start-server-and-test develop http://localhost:8000 cy:run"
  }
}

<hr>

### Shownotes

- 00:00 - Intro
- 01:00 - Starting with Gatsby
- 01:43 - Small things I added
- 03:40 - Cypress Setup
