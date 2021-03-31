import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isConnected: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/admin", {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        console.log(response.status);

        if (response.status === 403) {
          this.setState({ isConnected: false });
        } else {
          this.setState({ isConnected: true });
        }
        return response.json();
      })
      .then((response) => {
        this.setState({ users: response });
        console.log(this.state.users);
      })
      .catch((error) => {
        this.setState({ isConnected: false });
        console.log(error);
      });
  }

  render() {
    if (!this.state.isConnected) {
      return <h1>Please login first</h1>;
    }

    if (this.state.users && this.state.users.length > 0) {
      return (
        <>
          <h2 style={{ textAlign: "center", color: "blue" }}>
            voilà Damir baca{" "}
          </h2>

          <>
            {this.state.users.map((user) => {
              return (
                <div className="row pt-5" style={{ justifyContent: "center" }}>
                  <Card
                    style={{
                      justifyContent: "center",
                      width: 500,
                      color: "red",
                    }}
                    className={{ maxWidth: 345 }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          First name :{user.firstname}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h3">
                          Last name :{user.surname}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              );
            })}
          </>
          <Link to="/" style={{ textDecoration: "none" }}>
            Back to HomePage
          </Link>
        </>
      );
    }

    return <div>Aucun users</div>;
  }
}
export default Profile;
