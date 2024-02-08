import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";





class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      items: [
      {
        id: 1, 
        img: 'chair-grey.jpeg',
        title: 'Gray Chair',
        desc: 'Loren ipsum dolor sit amet, consecretur sdiposicing.',
        category: 'chairs',
        price: '49.99'
      },
      {
        id: 2, 
        img: 'table.webp',
        title: 'Table',
        desc: 'Loren ipsum dolor sit amet, consecretur sdiposicing.',
        category: 'Tables',
        price: '99.99'
      },
      {
        id: 3, 
        img: 'chair-white.jpeg',
        title: 'White Chair',
        desc: 'Loren ipsum dolor sit amet, consecretur sdiposicing.',
        category: 'chairs',
        price: '49.99'
      },
      {
        id: 4, 
        img: 'sofa.jpeg',
        title: 'Sofa',
        desc: 'Loren ipsum dolor sit amet, consecretur sdiposicing.',
        category: 'sofas',
        price: '149.99'
      },
      {
        id: 5, 
        img: 'wall-light.jpeg',
        title: 'Wall Light',
        desc: 'Loren ipsum dolor sit amet, consecretur sdiposicing.',
        category: 'lights',
        price: '39.99'
      }
    ]
   }
  }





  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items = {this.state.items} />
        <Footer /> 
      </div>
    );
  }
  
}


export default App;

