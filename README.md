# KindCard

I started the KindCard project to answer the question - "How much impact can a single act of kindness have?" I've always loved doing kind things for strangers, and I believe that one kind action can have a sort of "ripple effect" that promotes many more. I'm always curious about how to quantifity the abstract, and thus KindCard was born! 

As of May 2020, hundreds of cards are in circulation in at least 7 different countries. The original version of the website was a simple landing page and form so that people could submit stories when they received a card. With the added visualization and interactivity of the new site, I hope that cards will be logged even more. 
<br />
<br />
The site is built with React.js, Leaflet.js, Node, Express.js, CSS, and PostgreSQL.
<br />
<br />
[Backend repo here](https://github.com/joegelay/kindcard-backend)

### Features 

- Map on homepage shows all user-submitted stories from KindCard recepients. 
- Individual card pages to show locations of stories tied to a specific KindCard, plus story entries.
- Card submission form using Leaflet search plugin for standardizing location data and providing international support.
- Log in / Create acccount page using full auth through Bcrypt and JWT. 
- "My Map" page for logged in users to track locations of all their KindCards.
- Admin page for site upkeep. Admin page uses full auth of admin login. 

### Guest Login

There is no need to create and account or log in to explore most features of the site. Logging in allows users who submitted a card entry to gain access to a personalized map that shows the locations of all cards they have submitted a story for. 

### Video Demo

Coming soon!

<!-- [![KindCard Walk-through Video](https://img.youtube.com/vi/Hp6zfkOzCyA/0.jpg)](https://www.youtube.com/watch?v=Hp6zfkOzCyA) -->

### Author

* **Joe Gelay** - [Joe Gelay's Github](https://github.com/joegelay)

### License

This project is open to the public. No license is required for use.