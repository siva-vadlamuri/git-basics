import React, { Component } from 'react';
import Hoc from './higher_order_component';

// export default () => (
//   <h1>
//     Blog Page
//   </h1>
// )

class Blog extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  componentWillReceiveProps() {
    //alert('Component will recerive properties');
    console.log(this.props);
  }

  shouldComponentUpdate() {
    //alert('shouldComponentUpdate');
    console.log(' This methods triggers as long as component decides to make the changes/ updates');
  }

  render() {
    return (
      <>
        <h1>{this.props.heading}</h1>
        <h2>ReactJs Training</h2>
      </>
    )
  }
}
Blog = Hoc('AchieversIT Training institute In Bangalore,BTM', Blog);
export default Blog;

/**
 * Initialization Phase
 *     This is the phase in which the component is going to start its journey by setting up the state (see below) and the props.
 *
 *  Mounting Phase
 *    Mounting is the Phase in which component mounts on the DOM(Means component created and inserted into DOM)
 *    - componentWillMount()
 *        This method is called just before a component mounts on the DOM or the render method is called.
 *        After this method, the component gets mounted.
 *
 *        Note: You should not make API calls or any data changes using this.
 *        setstate in this method because it is called before the render method.
 *        So, nothing can be done with the DOM (i.e. updating the data with API response) as it has not been mounted.
 *        Hence, we can’t update the state with the API response.
 *    - componentDidMount()
 *      This method is called after the component gets mounted on the DOM.
 *      Like componentWillMount, it is called once in a lifecycle. Before the execution of this method, the render method is called (i.e., we can access the DOM).
 *      We can make API calls and update the state with the API response.
 *
 * Updating Phase -
 *    This is the 3rd phase which component passes.After the mounting phase where the component has been created, the update phase comes into the scene.
 *     This is where component’s state changes and hence, re-rendering takes place.
 *  - shouldComponentUpdate()
 *        This method determines whether the component should be updated or not.
 *        By default, it returns true. But at some point, if you want to re-render the component on some condition, then shouldComponentUpdate method is the right place.
 *        Suppose, for example, you want to only re-render your component when there is a change in prop — then utilize the power of this method. It receives arguments like nextProps and nextState which help us decide whether to re-render by doing a comparison with the current prop value.
 *  - componentWillUpdate()
 *       Like other methods, its name is also self-explanatory. It is called before the re-rendering of the component takes place.
 *       It is called once after the ‘shouldComponentUpdate’ method. If you want to perform some calculation before re-rendering of the component and after updating the state and prop, then this is the best place to do it.
 *       Like the ‘shouldComponentUpdate’ method, it also receives arguments like nextProps and nextState.
 * - componentDidUpdate()
 *      This method is called just after the re-rendering of the component. After the new (updated) component gets updated on the DOM, the ‘componentDidUpdate’ method is executed.
 *      This method receives arguments like prevProps and prevState.
 * Unmounting Phase
 *    - componentWillUnmount()
 *          This method is called before the unmounting of the component takes place. Before the removal of the component from the DOM, ‘componentWillUnMount’ executes.
 *          This method denotes the end of the component’s lifecycle.
 */