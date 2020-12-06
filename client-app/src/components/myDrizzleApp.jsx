import React, { Component } from "react";
import { toast } from "react-toastify";

class MyDrizzleApp extends Component {
  state = { dataKey: null, stackId: null };

  componentDidMount() {
    const { selectedClass, selectedDate, drizzle } = this.props;
    const contract = drizzle.contracts.Attendance;

    const dataKey = contract.methods["getAttendance"].cacheCall(
      selectedClass,
      selectedDate.toLocaleDateString()
    );

    this.setState({ dataKey });
  }

  handleSubmit = () => {
    const { attendanceList, selectedClass, selectedDate, drizzle } = this.props;
    const contract = drizzle.contracts.Attendance;
    var stringList = "";
    for (let i = 0; i < attendanceList.length; i++) {
      stringList += attendanceList[i] ? "1" : "0";
    }
    const stackId = contract.methods["setAttendance"].cacheSend(
      selectedClass,
      selectedDate.toLocaleDateString(),
      stringList,
      {
        from: this.props.drizzleState.accounts[0],
      }
    );
    this.setState({ stackId });
    this.getTxStatus();
  };

  getTxStatus = () => {
    const { transactions, transactionStack } = this.props.drizzleState;
    const txHash = transactionStack[this.state.stackId];

    if (!txHash) return null;
    if (transactions[txHash] && transactions[txHash].status === "success") {
      toast.success("Transaction Successful");
    }
    if (transactions[txHash] && transactions[txHash].status === "error") {
      toast.error("An unexpected error occurred");
    } else return null;
  };

  render() {
   

    return (
      <React.Fragment>
        <button
          type="button"
          className="btn btn-info btn-lg btn-block"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </React.Fragment>
    );
  }
}

export default MyDrizzleApp;
