# Poll creator
This application allows users to create polls and share those with other participants.

## Core functionality
Users must be able to create a new poll, by supplying a question or statement and some possible answers. Other people must be able to reach this poll and add an answer. The creator must then be able to close the poll and view and show the results.

## Context
The application will be used during classes where all participants are in the same room.

## First Sketch
![wireflow](https://github.com/lennartdeknikker/browser-technologies-1920/blob/master/wiki-resources/week%202/sketch.jpeg)

## Wireflow
This wireflow shows the main structure for this application and what features will or could be introduced.
### Layers
#### functional
- this layer shows the elements that are necessary to deploy the core functionality.
#### usable
- This layer shows what functionality can be useful, but needs javascript to work.
#### pleasurable
- This layer shows in text what changes would make working with this application more pleasurable.
![wireflow](https://github.com/lennartdeknikker/browser-technologies-1920/blob/master/wiki-resources/week%202/wireflow.png)

## Code
### Server
The server handles all the logic for this application. It creates polls, and saves the details and the amount of votes in a Mongo database. I defined several routes to handle requests for poll results, creating polls, closing polls and voting.
### Client
As of now, the client doesn't handle any JavaScript; sends data to the server by using HTML forms. This way it will be accessible for almost any browser. I added just two lines of css to get different form fields to start on new lines, since that makes it more readable for now.

## Next steps
I can now start to add CSS to make it all look better and add fallbacks for properties that are not supported by all browsers. When the CSS is then finished, I will add some JavaScript to make the application easier to use, as is shown in the wireflow above.

## Feedback 
### Input fields
I would like to get feedback on the way of showing input fields on new lines. Would it be better to use `<br />` elements? Or should I just use the css `display` property since `display: block;` and `display: inline-block;` are widely supported?




/////////////
## Features (browser technologies)
### Feature 1
#### supported by

## Possible accessibility issues

## About applying Progressive enhancement and feature detection