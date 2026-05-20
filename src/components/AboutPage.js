import React from 'react';
import EndPage from '../layouts/EndPage';

const title = 'About KindCard';
const description = (
  <p>
    How much impact can a single act of kindness have? This is the question that
    originally inspired KindCard.
    <br></br>
    <br></br>
    People do nice things for each other every day - paying for the person's
    coffee behind them in line, or stopping to help someone carry their
    groceries. It's easy to go about our days and never think twice about these
    events, but it's true that even the smallest act of kindness can create a
    ripple effect that positively affects the lives of many.
    <br></br>
    <br></br>
    KindCard was a live project built to track those interactions and show the
    true power of a single random act of kindness.
    <br></br>
    <br></br>
    This site is now an archived version of that project. It preserves the idea,
    the map, and the real stories that were submitted during KindCard's active
    run.
    <br></br>
    <br></br>
    The original platform is no longer actively operated, but if you found a
    KindCard still circulating in the world, this archive lets you explore what
    the project was and the stories it inspired.
    <br></br>
    <br></br>
    You can still look back at the project on{' '}
    <a
      className='a-link'
      href='https://www.instagram.com/kindcard_ig/'
      target='_blank'
      rel='noopener noreferrer'
    >
      Instagram
    </a>{' '}
    too.
  </p>
);

const linkText = 'Go back home';
const linkTo = '/';

export default function AboutPage() {
  return (
    <EndPage
      title={title}
      description={description}
      linkTo={linkTo}
      linkText={linkText}
    />
  );
}
