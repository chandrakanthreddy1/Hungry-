import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../Staticfiles/Css/loginpage.css';

var uname="Gokul";
var pwd="Sunny1234";
export default class LoginPage extends React.Component
{
  
  constructor(props)
  {
    super(props);
    this.state={
     formValue:{
       username:"",
       password:""
     },
     formError:{
      usernameError:"",
      passwordError:""
     },
     formValid:{
      username:false,
      password:false,
      buttonActive:false
     },
     errorMessage:"",
     successMessage:""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

    handleChange=e=>{
      let name=e.target.name
      let value=e.target.value
      let {formValue}=this.state
      this.setState({formValue:{...formValue,[name]:value}})
      this.validateField(name,value)
    }

    validateField=(name,value)=>{
      var formError=this.state.formError;
      var formValid=this.state.formValid;
      switch(name)
      {
        case "username":
          if(value==="")
          {
            formError.usernameError="Field Required";
            formValid.username=false;
          }
          else if(!value.match("^[a-zA-Z]+$"))
          {
            formError.usernameError="Should Contain Alphabets Only";
            formValid.username=false;
          }
          else if(value.length>20)
          {
            formError.usernameError="Maximum length is Ten";
            formValid.username=false;
          }
          else
          {
            formError.usernameError="";
            formValid.username=true;
          }
          break;
          case "password":
            if(value==="")
            {
              formError.passwordError="Field Required";
              formValid.password=false;
            }
            else if(value.length<5)
            {
              formError.passwordError="Minimum length should be Five";
              formValid.password=false;
            }
            else{
              formError.passwordError="";
            formValid.password=true;
            }
            break;
            default:break;
      }
      formValid.buttonActive=formValid.username && formValid.password;
      this.setState({formError:formError,formValid:formValid})

    };
  


   handleSubmit=e=>
   {
     e.preventDefault();
     this.submit();
   }

    submit()
    {
      this.setState({successMessage:"",errorMessage:""});
        const {formValue}=this.state;
        if(formValue){

        if((this.state.formValue.username)===uname && (this.state.formValue.password)===pwd)
        {
          this.setState({successMessage:"Login successfully"});
          
        }
        else{
          this.setState({errorMessage:"Login Failed"});
        }
       }
       
      }

    

   
    render()
    { const{username,password}=this.state;
    return(
    <div>
       <div>
        <Jumbotron>
           <Container>
             <Row>
               <Col sm={7}>
                </Col>
                <Col>
               <Card style={{ width: '28rem', height:'30rem'}}>
                  <Card.Body>
                    <Card.Title style={{fontSize:"250%",color:"#ffffff",fontFamily: 'Syne'}}>Hungry?</Card.Title>
                    <br/><br/>
                    <Card.Text>
                    <form>
                        <div className="input-group form-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                          </div>
                          <input type="text" onChange={this.handleChange} value ={username} className="form-control" placeholder="username" id="username" name="username"/>
                          
                        </div>
                        <span name="usernameError" className="text-danger">{this.state.formError.usernameError}</span>
                        <br/><br/>
                        <div className="input-group form-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                          </div>
                          <input type="password" onChange={this.handleChange} value={password} className="form-control" placeholder="password" id="password" name="password"/>
                        </div>
                        <span name="passwordError" className="text-danger">{this.state.formError.passwordError}</span>
                        <br/><br/>
                        <div className="form-group">
                          <input type="submit" onClick={this.handleSubmit} value="Login" className="btn float-center login_btn" disabled={!this.state.formValid.buttonActive}/>
                         
                        </div>
                        <span name="loginSuccess" className="text-success">{this.state.successMessage}</span>
                        <span name="loginError" className="text-danger">{this.state.errorMessage}</span>
                      </form>
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Col>
             </Row>
           </Container>
         </Jumbotron>
       </div>
    </div>
    );
    }
}