import React, { Component } from 'react';
import './extra/bootstrap.css'
import './App.css';
import FirstComponent, { FirstComponentInside } from './components/BasicComponents/FirstComponent';
import SecondComponent from './components/BasicComponents/SecondComponent';
import FunctionComponent from './components/BasicComponents/FunctionComponent';
import BasicRouting from './components/UsingRouter/BasicRouting'
import NestedRouting from './components/UsingRouter/NestedRouting';
import URLParameters from './components/UsingRouter/URLParameters';
import AuthenticationExample from './components/UsingRouter/AuthenticationExample';
import SidebarExample from './components/UsingRouter/SidebarExample';
import ParentComponent from './components/CommunicationBetweenComponents/ParentComponent';
import JSXFirstExample from './components/UsingJSX/JSXFirstExample';
import Counter from './components/Examples/counterExample/Counter';
import TodoManagement from './components/Examples/Todo/TodoManagement';
import GoogleLoginPlug from './components/AddSocialMediaLogin/GoogleLoginPlug';
import FacebookLoginPlug from './components/AddSocialMediaLogin/FacebookLoginPlug';
import UsingLink from './components/UsingRouter/UsingLink';
import StopWatch from './components/UsingTimer/stopWatch/StopWatch';
import CutdownTimer from './components/UsingTimer/cutdownTimer/CountdownTimer'
import ApplyProgressBar from './components/UsingTimer/progressBar/ApplyProgressBar';
import ClassExample from './components/BasicComponents/ClassExample';
import StyleInCss from './components/WaysToStyle/StyleInCss';
import TaskTracker from './components/Examples/TaskTracker/TaskTracker';


/**
   * The Component Lifecycle
  * These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
  * 1.constructor()
  * 2.render()
  * ­3.React updates ­D­O­M and refs
  * 4.componentDidMount()
  * 5.componentDidUpdate()
  * 6.componentWillUnmount()
  */
class App extends Component {
  constructor() {
    super(); //Error 1// it is necessary for using 'this'
    this.state = {
      
    };
    this.childReference = React.createRef();
  };

  render() {

    return (
      <div className="App">
        <TodoManagement />
        <br />
        <hr />
        <FirstComponent></FirstComponent>
        <FirstComponentInside></FirstComponentInside>
        <SecondComponent></SecondComponent>
        <FunctionComponent></FunctionComponent>
        <br />
        <hr />
        <ClassExample></ClassExample>
        <br />
        <hr />
        <Counter />
        <br />
        <hr />
        <JSXFirstExample />
        <br />
        <hr />
        <BasicRouting />
        <br />
        <hr />
        <NestedRouting />
        <br />
        <hr />
        <URLParameters />
        <br />
        <hr />
        <AuthenticationExample />
        <br />
        <hr />
        <SidebarExample />
        <br />
        <hr />
        <UsingLink/>
        <br />
        <hr />
        <ParentComponent />
        <br />
        <hr />
        {/* <GoogleLoginPlug/> */}
        <br />
        <hr />
        {/* <FacebookLoginPlug/> */}
        <br />
        <hr />
        <StopWatch/>
        <CutdownTimer/>
        <ApplyProgressBar/>
        <br />
        <hr />
        <StyleInCss></StyleInCss>
        <br />
        <hr />
        <TaskTracker></TaskTracker>
        <br />
        <hr />
        <br />
        <hr />
        <br />
        <hr />
      </div>
    );
  }

  componentDidMount() {
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }
}


export default App;
