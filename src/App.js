import { useState, useEffect, useCallback, useRef } from 'react';

import QuoteCard from './components/QuoteCard';
import { colorArray } from './constants/colorArray';
import classes from './App.module.css';

function App() {
  const [quote, setQuote] = useState();
  const [quotes, setQuotes] = useState([]);
  const [color, setColor] = useState({
    background: ` white`,
  });
  const colorRef = useRef();

  // Storing the current state in a ref avoids
  // the useEffect functions from being called
  // whenever the color state changes, while
  // also avoiding warnings from missing useEffect
  // dependencies.
  colorRef.current = color;

  async function quoteGrabber() {
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();
    const transformedQuotes = data.map((quoteData) => {
      return { author: quoteData.author, text: quoteData.text };
    });
    setQuotes(transformedQuotes);
  }

  const newIndex = (array = []) => {
    return Math.floor(Math.random() * array.length);
  };

  const newColors = useCallback(
    (
      colors = [{ background: ` rgb(255, 199, 199)` }],
      currentColor
    ) => {
      return colors // Filters out the current color from array
        .filter((ele) => ele !== currentColor)
        .map((ele) => ele);
    },
    []
  );

  // Fetches and stores api data in array when component mounts
  useEffect(() => {
    quoteGrabber();
  }, []);

  // Sets an initial quote and color upon mounting
  useEffect(() => {
    const quoteIndex = newIndex(quotes);
    const newColor = newColors(colorArray, colorRef);
    const colorIndex = newIndex(newColor);

    setQuote(quotes[quoteIndex]);
    setColor(newColor[colorIndex]);
  }, [quotes, newColors]);

  // Changes quote and color every 15s, runs once upon mounting
  useEffect(() => {
    const interval = setInterval(() => {
      const quoteIndex = newIndex(quotes);
      const newColor = newColors(colorArray, colorRef);
      const colorIndex = newIndex(newColor);

      setQuote(quotes[quoteIndex]);
      setColor(newColor[colorIndex]);
    }, 15000);
    return () => clearInterval(interval);
  }, [quotes, newColors]);

  return (
    <div className={classes.background} style={color}>
      {quote && (
        <QuoteCard
          author={quote.author}
          text={quote.text}
          colors={colorArray}
        />
      )}
    </div>
  );
}

export default App;
