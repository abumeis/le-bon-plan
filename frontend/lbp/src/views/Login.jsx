//import React from "react";
//import { useHistory } from "react-router-dom";
//import { Form, Input, Button, Checkbox } from "antd";
//
//const layout = {
//  labelCol: {
//    span: 4,
//  },
//  wrapperCol: {
//    span: 16,
//  },
//};
//const tailLayout = {
//  wrapperCol: {
//    offset: 10,
//    span: 16,
//  },
//};
//
//export default function Login() {
//  let history = useHistory();
//  const onFinish = async (data) => {
//    try {
//      console.log("Success:", data);
//      const response = await fetch("http://localhost:8000/login", {
//        method: "POST",
//        headers: {
//          "content-type": "application/json",
//        },
//        body: JSON.stringify(data),
//      });
//      if (response.ok) {
//        const tokenObj = await response.json();
//        localStorage.setItem("token", tokenObj.token);
//        history.push("/");
//      }
//    } catch (error) {
//      console.error(error);
//    }
//  };
//
//  const onFinishFailed = (errorInfo) => {
//    console.log("Failed:", errorInfo);
//  };
//
//  return (
//    <>
//      <Form
//        {...layout}
//        name="basic"
//        initialValues={{
//          remember: true,
//        }}
//        onFinish={onFinish}
//        onFinishFailed={onFinishFailed}
//      >
//        <Form.Item
//          label="Username"
//          name="username"
//          rules={[
//            {
//              required: true,
//              message: "Please input your username!",
//            },
//          ]}
//        >
//          <Input />
//        </Form.Item>
//
//        <Form.Item
//          label="Password"
//          name="password"
//          rules={[
//            {
//              required: true,
//              message: "Please input your password!",
//            },
//          ]}
//        >
//          <Input.Password />
//        </Form.Item>
//
//        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
//          <Checkbox>Remember me</Checkbox>
//        </Form.Item>
//
//        <Form.Item {...tailLayout}>
//          <Button type="primary" htmlType="submit">
//            Submit
//          </Button>
//        </Form.Item>
//      </Form>
//    </>
//  );
//}
import React from "react";
import { withRouter } from "react-router-dom";

import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  onChangeUserName = (e) => {
    this.setState({ username: e.target.value });
  };
  z;
  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onSubmit = () => {
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        localStorage.setItem("token", response.token);
        this.props.history.push("/Home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <Grid style={{ height: "80vh", padding: 20 }}>
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
            <Avatar
              src={this.state.profilePic}
              style={{
                backgroundColor: "#EA3820",
                width: "60px",
                height: "60px",
              }}
            />
            <h2>Login</h2>
          </Grid>
          <TextField
            label="Username"
            placeholder="Enter your Username"
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
            Login
          </Button>
          <Typography> </Typography>
          <Typography>
            {" "}
            Do you have an account ?<Link href="signup">Sign Up</Link>
          </Typography>
        </Paper>
      </Grid>
    );
  }
}
export default withRouter(login);
