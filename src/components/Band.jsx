import React from 'react';
import YouTube from 'react-youtube';
const axios = require('axios');

class Band extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bandName: this.props.name,
      videoId: undefined
    };
  }
  componentDidMount() {
    const apiKey = 'AIzaSyAYQjF7_hRZGUMoUwlcUezlq33cGFz5SO0';
    const query = this.state.bandName + 'band';

    axios
      .create({
        baseURL: 'https://content.googleapis.com/youtube/v3',
        timeout: 1000
      })
      .get(
        '/search?q=' +
          query +
          '&part=snippet&maxResults=1&type=video&key=' +
          apiKey
      )
      .then(response => {
        console.log(response);
        const vidId = response.data.items[0].id.videoId;
        this.setState({ videoId: vidId });
      })
      .catch(function(error) {
        console.log('Echec appel API Youtube: ' + error);
      });
  }

  render() {
    if (this.state.videoId) {
      return (
        <div>
          <h3>{this.props.name}</h3>

          <YouTube
            videoId={this.state.videoId} // defaults -> null
            id={this.state.videoId} // defaults -> null
          />
        </div>
      );
    } else {
      return (
        <div>
          <h3>{this.props.name}</h3>
          <p>Video unavailable, please come back later</p>
        </div>
      );
    }
  }
}
export default Band;
