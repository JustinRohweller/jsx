import "./SeasonDisplay.css";
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// Used with first project.
// function renderCard() {
//   return (
//     <ApprovalCard>
//       <CommentDetail
//         avatar={faker.image.avatar()}
//         author={faker.name.firstName()}
//         date={"a few seconds ago."}
//         content={faker.lorem.sentence()}
//       />
//     </ApprovalCard>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  renderErrorMessage = () => {};

  render() {
    const icon = "snowflake";
    // if (this.state.errorMessage && )
    return (
      // <div className="season-display winter ui containter comments ">
      //   Latitude:{this.state.lat}
      //   <i className={`icon-left massive ${icon} icon`} />
      //   <br />
      //   Error:{this.state.errorMessage}
      // </div>
        <Spinner />
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
