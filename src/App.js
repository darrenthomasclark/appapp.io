import React from 'react'
import './style.sass'

class App extends React.Component {

  render () {
    return <div>
    <body>
    <main>
      <header>
        <div className="headerlogo"/>
        <div className="headerright">
          <h2>The smarter way to get started_</h2>
        </div>
      </header>
      <div className="state1content">
        <img src="/images/startbutton.svg" alt="Start Button" />
        <div className="introtext"><p>App-App is a <a href="https://facebook.github.io/react/">React.js</a> boilerplate developed by a developer for developers.</p> <p>It simplifies the process of disregarding <span style={{color: 'gray'}}>create-react-app's</span> often limiting dev dependencies allowing for libraries typically unavailable in <a href="https://facebook.github.io/react/">React.js</a> to quickly be installed.</p></div>
      </div>
      <footer>
        <div className="footerleft">
          <div className="donatebutton"><a href="#">Donate</a></div>
        </div>
        <div className="footerright">
          <div className="sourcebutton"><a href="#">View Source</a></div>
          <div className="startbutton"><a href="#">Enable App-App</a></div>
        </div>
      </footer>
    </main>
    </body>
    </div>
  }
}

export default App
