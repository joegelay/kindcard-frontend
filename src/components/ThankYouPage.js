import React from 'react';
import EndPage from '../layouts/EndPage';

const title = 'Thank you for sharing your story!';
const description = (
  <p>
    Your entry has been added to this archived version of KindCard.
    <br></br>
    <br></br>
    In this revived site, new stories are saved locally in your browser so you
    can still experience how the project worked and see your contribution on the
    map.
    <br></br>
    <br></br>
    You can also look back at the original project on{' '}
    <a
      className='a-link'
      href='https://www.instagram.com/kindcard_ig/'
      target='_blank'
      rel='noopener noreferrer'
    >
      Instagram
    </a>{' '}
    and keep spreading the kindness.
  </p>
);

const linkText = 'Go back home';
const linkTo = '/';

export default function ThankYouForSharingPage() {
  return (
    <EndPage
      title={title}
      description={description}
      linkTo={linkTo}
      linkText={linkText}
    />
  );
}
