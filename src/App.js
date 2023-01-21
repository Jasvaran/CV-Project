/* eslint-disable no-useless-constructor */
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client'
import PersonalInfo from './components/PersonalInfo';

class App extends React.Component {
  constructor(props){
    super(props)
  }


  render() {
    return (
      <div className='main-container'>
        <div className='header'>
          <h1 className='project-title'>CV-Project</h1>
          <h3 className='title-footnote'>
            <a href='url'>www.theodinproject.com</a>
          </h3>
        </div>
        <div className='cv-body'>
          <div className='cv-container'>
            <PersonalInfo />
          </div>
        </div>
      </div>
    )
  }
}


export default App;
