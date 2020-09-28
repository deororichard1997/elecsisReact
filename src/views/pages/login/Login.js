import React from 'react'
import axios from 'axios'
//import { browserHistory } from 'react-router';
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const server = 'https://cors-anywhere.herokuapp.com/http://test.elecsis.co';
//const history = useHistory();
class Login extends React.Component{

  
  state = {
    username: '',
    password: ''
  };

  changeUsername = (e) => {
    this.setState({
      username: e.target.value
    });

  }

  changePassword= (e) => {
    this.setState({
      password: e.target.value
    });
  }


  login= () =>{
    console.log(this.state.username);
    console.log(this.state.password);
    const form = {
      user: this.state.username,
      pass: this.state.password
    };

    let vm = this;

    axios.post(server, form)
      .then(function (response) {
        console.log(response.data);
        if (response.data) {
          vm.props.history.push("/Dashboard")
        }
        if (response.data == false) {
          alert("Usuario o contraeña incorrecta. Por favor intente nuevamente.");
        }
        
    })
      .catch(function (error) {
       console.log(error);
       
    });
    }
  render(){
    return (
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" value={this.state.username} placeholder="Username" onChange={this.changeUsername} autoComplete="username" />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" value={this.state.password} placeholder="Password" onChange={this.changePassword} autoComplete="current-password" />
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <CButton color="primary" onClick={this.login} className="px-4">Login</CButton>
                        </CCol>
                        <CCol xs="6" className="text-right">
                          <CButton color="link" className="px-0">Forgot password?</CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CCardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                      </Link>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    )
  }
}

export default Login
