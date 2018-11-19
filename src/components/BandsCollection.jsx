import React from 'react';
import Band from './Band';

const bandsData = [
  {
    name: 'The Beatles'
  },
  {
    name: 'Die Antwoord'
  },
  {
    name: 'Tool'
  },
  {
    name: 'morning musume'
  },
  {
    name: 'The Talking Heads'
  },
  {
    name: 'Pink Floyd'
  },
  {
    name: 'Dissection'
  },
  {
    name: 'Radiohead'
  },
  {
    name: 'Portishead'
  },
  {
    name: 'Rez'
  },
  {
    name: 'Disturbed'
  }
];
class BandsCollection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Bands list</h2>
        {bandsData.map(band => {
          return <Band key={band.name} name={band.name} />;
        })}
      </div>
    );
  }
}
export default BandsCollection;
