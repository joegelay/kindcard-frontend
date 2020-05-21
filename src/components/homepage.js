import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import MainMap from './MainMap'
import Header from './Header'
import Footer from './Footer'

export default function Homepage(props) {

    // const [cardData, setCardData] = useState([]);
    // const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch(`http://localhost:4000/cards/`)
            .then(response => response.json())
            .then(result => {
                 console.log(result)
            })
            // .then(setLoading(false))

            // return () => setLoading(true)
    })

    const randomId = '009'

      return (
          <div className="App">
            <Header />
            <div>
                <h1 id="brand">KindCard</h1>
                <h2 id="tagline">Every Act Mapped.</h2>
            </div>
            <MainMap markersData={props.markersData} />
            <div id="main-button-container">
                <Link to='/share-your-story' className="main-button">
                    Enter your card &rarr;
                </Link>
                <Link to={`/cards/${randomId}`} className="main-button">
                    View random card &rarr;
                </Link>
            </div>
            <Footer />
          </div> 
      );
  }

  