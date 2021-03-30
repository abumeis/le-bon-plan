//import React from "react";
//import { useHistory } from "react-router-dom";
//import { Form, Input, Button, Checkbox, Upload } from "antd";
//import { InboxOutlined } from "@ant-design/icons";
//import "antd/dist/antd.css";
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
//const normFile = (e) => {
//  console.log("Upload event:", e);
//
//  if (Array.isArray(e)) {
//    return e;
//  }
//
//  return e && e.fileList;
//};
//
//export default function Signup() {
//  let history = useHistory();
//
//  const onFinish = async (data) => {
//    try {
//      console.log("Success:", data);
//      const response = await fetch("http://localhost:8000/signup", {
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
//          label="First-Name"
//          name="firstName"
//          rules={[
//            {
//              required: true,
//              message: "Please input your first name!",
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
//        <Form.Item label="Picture of you">
//          <Form.Item
//            name="dragger"
//            valuePropName="fileList"
//            getValueFromEvent={normFile}
//            noStyle
//          >
//            <Upload.Dragger name="files" action="/upload.do">
//              <p className="ant-upload-drag-icon">
//                <InboxOutlined />
//              </p>
//              <p className="ant-upload-text">
//                Click or drag file to this area to upload
//              </p>
//              <p className="ant-upload-hint">
//                Support for a single or bulk upload.
//              </p>
//            </Upload.Dragger>
//          </Form.Item>
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
      profilePic: "",
      firstName: "",
      surName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    };
  }
  onChangeProfilePic = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profilePic: reader.result[0] });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  //onChangeProfilePic = (e) => {
  //  this.setState({ profilePic: e.target.files[0] });
  //};
  onChangeFirstName = (e) => {
    this.setState({ firstName: e.target.value });
  };
  onChangeSurName = (e) => {
    this.setState({ surName: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  onChangeConfirmPassword = (e) => {
    this.setState({ passwordConfirmation: e.target.value });
  };

  onSubmit = () => {
    const formData = new FormData();
    formData.append("image", this.state.profilePic);
    formData.append("firstName", this.state.firstName);
    formData.append("surName", this.state.surName);
    formData.append("dateOfBirth", this.state.dateOfBirth);
    formData.append("city", this.state.city);
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);
    formData.append("passwordConfirmation", this.state.passwordConfirmation);
    fetch("http://localhost:8000/signup", {
      method: "POST",
      body: formData,

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
            label="email"
            placeholder="email"
            fullWidth
            required
            value={this.state.email}
            onChange={this.onChangeEmail}
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
