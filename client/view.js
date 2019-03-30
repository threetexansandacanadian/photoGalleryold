import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Gallery from './gallery';

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target.value);
    let productPhotos = '';
    let tempArr = ["https://s3.amazonaws.com/fecphotogallery2019/photos/1_1.jpg",
      "https://s3.amazonaws.com/fecphotogallery2019/photos/1_2.jpg",
      "https://s3.amazonaws.com/fecphotogallery2019/photos/4_1.jpg"];
    for (let i = 0; i < tempArr.length; i++) {
      productPhotos += <img src={tempArr[i]} />;
    }
  }

  render() {

    return (
      < div >
        <table>
          <td id="gallery">
            {productPhotos}

          </td>
          <td id="full">

          </td>

        </table>
        I'm a View
      < Gallery />
      </div >
    )
  }
}

module.exports = View;