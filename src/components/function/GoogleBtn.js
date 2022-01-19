import React, { Component } from "react";
import { GoogleLogin, GoogleLogout, GoogleUser } from "react-google-login";
import styled from "styled-components";
import axios from "axios"

import { UserData } from "../Object/UserData";

const CLIENT_ID = "1037957664679-avvmdv7t0cca98fdn09fbo8h1mo2v1p9.apps.googleusercontent.com"
class GoogleBtn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogined: false,
            accessToken: "",
            googleId: "",
            userName: "",
        };

        this.login = this.login.bind(this);
        this.handleLoginFailure = this.handleLoginFailure.bind(this);
        this.logout = this.logout.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
    }  

    login(response) {
        UserData.googleId = response.googleId;
        UserData.userName = response.yu.nf;
        if(response.accessToken){
            this.setState((state) => ({
                isLogined: true,
                accessToken: response.tokenId,
                googleId: response.googleId,
                userName: response.yu.nf,
            }));
        
        // axios
        //     .get(
        //         `${process.env.REACT_APP_BACK_END_URL}/google-login?ID_toekn=${this.state.accessToken}`
        //     )
        //     .then((response) => {
        //         console.log(response.data);
        //     })
        //     .catch((err) => console.log(err));
        }
    }
    handleSubmit(e) {
        e.preventDefault();
    }
    logout(response){
        UserData.googleId = "";
        UserData.userName = "";
        this.setState((state) => ({
            isLogined: false,
            accessToken: "",
            googleId: "",
            userName: "",
        }));
    }

    handleLoginFailure(response){
        alert("Failed to log in");
    }

    handleLogoutFailure(response){
        alert("Failed to log out");
    }

    render() {
        return (
            <div onClick={this.handleSubmit}>
                <LoginContainer>
                    {UserData.googleId !== "" ? (
                        <GoogleLogout
                            clientId = {CLIENT_ID}
                            buttonText = "Logout"
                            onLogoutSuccess = {this.logout}
                            onFailure = {this.handleLogoutFailure}
                        ></GoogleLogout>
                    ) : (
                        <GoogleLogin
                            clientId={CLIENT_ID}
                            buttonText="Login"
                            onSuccess={this.login}
                            onFailure={this.handleLoginFailure}
                            cookiePolicy={"single_host_origin"}
                            responseType="code,token"
                            onClick={this.props.Submit}
                        ></GoogleLogin>
                    )}
                    {this.state.accessToken
                        ? ""
                        : ""
                        // ? console.log("로그인 성공!", this.state)
                        // : console.log("로그아웃 상태입니다.", this.state)
                    }
                </LoginContainer>
            </div>
        );
    }
}

const LoginContainer = styled.div`
    display: flex;
    width: 100px;
    height: 50px
`;

export default GoogleBtn;