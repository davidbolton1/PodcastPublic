---
title: "Building out first tests"
slug: "first-tests"
cover: "logo.png"
date: 2021-03-07
audioPath: episodetwo.mp3
episodeNumber: 1
fileSize: 6.9
showLength: 34:26
category: "tech"
shortDescription: "Setting up our first unit tests"
tags:
    - programming
    
---

### Let's Begin!

My first tests are going to revolve around accessibility. Something that is so often ignored, but is made easy in Cypress. I started out with 4 critical errors, but have since reduced that to 2, with fixes in the works to make it 0!

Error 1:
document-title on 1 Node
Fix: 
Simply added a title element to the index.html file

Error 2:
html-has-lang on 1 Node
Fix: 
An interesting error because I have a lang element already in y index.jsx, but the fix was to also put a tag in the index.html

Error 3:
landmark-one-main on 1 Node
Fix: 
This error is asking for a main landmark for assisted readers to jump to the content. Not sure where I'm going to put the main tag quite yet as I still have some features to add, but it will most likely be given as a prop to the episode wrapper.


Error 4:
page-has-heading-one on 1 Node
Fix:
An error caused by not having an H1 tag. So the way I will most likely solve this is by passing an H1 as a prop to something on my cards.
Ex. 
const{title, description, headingLevel} = this.props
const Title = headingLevel
return (
    <div className='card'>
        <Title>{title}</Title>
        <p>{description}</p>
      </div>
)

I'm not going to do this quite yet however, as there may be a more efective way to add an H1, even if it's just a title tag in the index.js
https://www.youtube.com/watch?v=saYovXS9Llk
https://circleci.com

<hr>

### Shownotes


- 00:20 - Intro End
- 01:40 - Accessability test
- 05:12 - Continuous Integraton
