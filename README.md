# Inspirational Quotes
This is a simple React based webpage that displays a random inspirational quote every 15 seconds.

## Usage
The webpage accepts no user inputs and has no interactivity at all.

## Functionality
Quotes are fetched from https://type.fit/api/quotes upon DOM mounting, and are then stored in an array. An initial useEffect hook will run upon DOM mounting and set a random quote and color. At the same time, another useEffect hook runs a setInterval function, which picks and shows a random quote and color every 15 seconds.

The current color of the webpage is 'saved' in a ref, which allows the useEffect hooks to refence the current color, while still only running them on DOM mounting (instead of every time the color changes).

## Motivation
The website is a first try at using API calls, and to further practise with state and hooks. 
The design of the website is meant to be as simple as possible, with the intention that users simply open the site and do nothing else. It could be useful for meditation purposes or similar, and I felt that having to click to change quotes, or to have any additional information rendered, would hurt the experience.