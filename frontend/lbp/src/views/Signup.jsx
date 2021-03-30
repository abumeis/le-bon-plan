import {
  Avatar,
  Button,
  Grid,
  IconButton,
  Link,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React from "react";
import { withRouter } from "react-router-dom";

class signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePicture: "",
      firstname: "",
      surname: "",
      username: "",
      password: "",
      passwordConfirmation: "",
    };
  }
  onChangeProfilePic = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profilePicture: reader.result[0] });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  onChangeProfilePic = (e) => {
    this.setState({ profilePicture: e.target.files[0] });
  };
  onChangeFirstName = (e) => {
    this.setState({ firstname: e.target.value });
  };
  onChangeSurName = (e) => {
    this.setState({ surname: e.target.value });
  };

  onChangeUserName = (e) => {
    this.setState({ username: e.target.value });
  };
  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  onChangeConfirmPassword = (e) => {
    this.setState({ passwordConfirmation: e.target.value });
  };

  onSubmit = () => {
    const formData = new FormData();
    formData.append("profilePicture", this.state.profilePicture);
    formData.append("firstname", this.state.firstname);
    formData.append("surname", this.state.surname);
    formData.append("username", this.state.username);
    formData.append("password", this.state.password);
    formData.append("passwordConfirmation", this.state.passwordConfirmation);
    console.log(formData);
    fetch("http://localhost:8000/signup", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        username: this.state.username,
        firstname: this.state.firstname,
        surname: this.state.surname,
        password: this.state.password,
        passwordConfirmation: this.state.passwordConfirmation,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      // method: "POST",
      // headers: { "Content-type": "application/json" },
      // body: formData,

      ///fetch("http://localhost:8000/signup", {
      ///  method: "POST",
      ///  headers: {
      ///    "Content-type": "application/json",
      ///  },
      ///  body: JSON.stringify({
      ///    firstName: this.state.firstName,
      ///    surName: this.state.surName,
      ///    dateOfBirth: this.state.dateOfBirth,
      ///    email: this.state.email,
      ///    password: this.state.password,
      ///    passwordConfirmation: this.state.passwordConfirmation,
      ///  }),
      //})
    })
      .then((response) => {
        localStorage.setItem("token", response.token);
        this.props.history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <Grid style={{ height: "100vh", padding: 20 }}>
        <Paper
          elevation={10}
          style={{
            backgroundColor: "#EA6417",
            padding: 20,
            height: "80vh",
            width: 350,
            margin: "20px auto",
          }}
        >
          <Grid align="center">
            <IconButton>
              <Avatar
                src={this.state.profilePic}
                style={{
                  backgroundColor: "#EA3820",
                  width: "60px",
                  height: "60px",
                }}
              />
            </IconButton>
            <h2>Sign Up</h2>
          </Grid>
          <input
            style={{ paddingTop: "20px" }}
            type="file"
            name="image-upload"
            id="input"
            onChange={this.onChangeProfilePic}
          />

          <TextField
            label="first name"
            placeholder="Enter first name"
            fullWidth
            required
            value={this.state.firstName}
            onChange={this.onChangeFirstName}
          />
          <TextField
            label="surname"
            placeholder="Enter surname"
            fullWidth
            requiredvalue={this.state.surName}
            onChange={this.onChangeSurName}
          />
          <TextField
            label="username"
            placeholder="username"
            fullWidth
            required
            value={this.state.username}
            onChange={this.onChangeUserName}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            value={this.state.password}
            onChange={this.onChangePassword}
          />
          <TextField
            label="confirm password"
            placeholder="confirm password"
            type="password"
            fullWidth
            required
            value={this.state.passwordConfirmation}
            onChange={this.onChangeConfirmPassword}
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            variant="contained"
            style={{ margin: "8px 0" }}
            fullWidth
            onClick={this.onSubmit}
          >
            Sign in
          </Button>
          <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>
          <Typography>
            {" "}
            Do you allready have an account ?<Link href="/login">Login </Link>
          </Typography>
        </Paper>
      </Grid>
    );
  }
}

export default withRouter(signup);
