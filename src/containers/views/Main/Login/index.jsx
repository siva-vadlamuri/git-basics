// import React,{ Component } from 'react'

// class Login extends Component {
//   constructor() {
//     super();
//     this.state ={
//       username:'',
//       password:''
//     }
//   }
//   validateLogin(e){
//     console.log(e.target.value);
//     this.setState({username:e.target.value});
//   }
//   render() {
//     return (
//       <div>
//           <input  type="text" 
//                   name="username"
//                   onChange={this.validateLogin.bind(this)}/>
//       </div>
//     )
//   }
// }

// export default Login;

import React from 'react';
import axios from 'axios';
import Blog from '../Blog'
// external CSS
// import rules from '../../../../css/login.module.css'
  
class Login extends React.Component {  
   constructor(props) {  // hook but not from react, this is hook which was taken care class
      super(props);  
      
      this.changeState = this.changeState.bind(this) ;
      this.addRecord = this.addRecord.bind(this);
      this.state = null;
      
   } 
   addRecord(){
      //alert(this.state.isAdded);
      let postData = {
         "name":"AchieversIT06",
         "email":"ait06@gmail.com",
         "address":"Bangalore06",
         "country":"India06",
         "phone":"06-8217268018"
     }
      axios.post('http://127.0.0.1:4000/user',postData)
      .then(res=>{
         console.log('Post Return');
         console.log(res);
         if(res.data.affectedRows==1){
            alert('Record is successfully inserted');
         }
      });
   }   
   render() { 
      const pageTitle = " Welcoem to React Life cycle Methods";
      // let activeClass = {
      //    border: '1px solid red',
      //    padding: '20px',
      //    backgroundColor:'orange'
      // } 
      // let anotherClass = {
      //    color: '#fff'
      // }
      //let mainClass = {...activeClass ,...anotherClass}
      return (  
         // <div className="loginBlock">  
         //     <h1 className={rules.loginBlockh1} id={rules.main}>ReactJS component's Lifecycle</h1>  
         //     <h3>Hello {this.state.name}</h3>  
         //     <button onClick = {this.changeState} className="btn btn-danger">Change</button>          
         // </div>  
         <div>
            <ul>
            {this.state.responseData.map((item) => (
                <li key={item.id}>Hello, {item.name} from {item.owner.avatar_url}!</li>
            ))}
            </ul>
            <ol>
               { this.state.users.map((user,index) =>(
                  <li key={index}>{user.name} - {user.email}</li>
               ))}
            </ol>
            <button onClick={this.addRecord}>Add Record</button>
            <Blog  title={pageTitle}/>
         </div>
      );  
   }  
   componentWillMount() {  
      console.log('Component Will MOUNT!');
      //alert('will mount')  
      this.setState({name: "ReactJs",responseData:[],users:[]});
   }  
   componentDidMount() {
      // const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
      // fetch(apiUrl)
      //   .then((response) => response.json())
      //   .then((data) => {
      //      console.log(data);
      //      this.setState({ responseData: data });
      // });
      // https://jsonplaceholder.typicode.com/users
      // fetch('http://127.0.0.1:4000/user')
      // .then((response)=>response.json())
      // .then((data) => {
      //    console.log('List of user from fake API');
      //    console.log(data);
      //    this.setState({users : data})
      // });
      axios.get('http://127.0.0.1:4000/user')
      //.then((res)=>res.json())
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(res);
        this.setState({users : res.data})
      });
      this.addRecord();
   } 
   //following method userdefined method
   changeState(){  
      this.setState({name:"Welcome to AchieversIT ReactJs training program!"});  
   }  
  //  componentWillReceiveProps(newProps) {      
  //     console.log('Component Will Recieve Props!')  
  //  }  
  //  shouldComponentUpdate(newProps, newState) {  
  //     return true;  
  //  }  
   // componentWillUpdate(nextProps, nextState) {  
   //    console.log('Component Will UPDATE!');
   // }  
   componentDidUpdate(prevProps, prevState) {  
      console.log('Component Did UPDATE!'); 
      console.log(this.state); 
   }  
  //  componentWillUnmount() {  
  //     console.log('Component Will UNMOUNT!')  
  //  }  
}  
export default Login;  