import React, { Component } from "react";
import Dtpicker from "./common/datePicker";
import { classes } from "./../services/classService";
import ListGroup from "./common/listGroup";
import PreviousAttendaceTable from "./previousAttendanceTable";
import { columnsPrev } from "./../services/tableColumns";
import { getDatewiseAttendance } from "../services/fakeSmartContract";

class PreviousAttendance extends Component {
  state = {
    selectedDate: new Date(),
    selectedClass: classes[2],
    attendanceList: null,
  };

  handleSelect = (item) => {
    this.setState({ selectedClass: item });
    this.updateAttendanceList();
  };

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
    this.updateAttendanceList();
  };

  updateAttendanceList = () => {
    const attendanceList = getDatewiseAttendance(
      this.state.selectedClass.name,
      this.state.selectedDate.toLocaleDateString()
    );

    this.setState({ attendanceList });
  };

  render() {
    const { selectedClass, selectedDate, attendanceList } = this.state;

    return (
      <React.Fragment>
        <div
          className="jumbotron"
          style={{ paddingTop: 10, paddingBottom: 10 }}
        >
          <div className="ml-5">
            <h1 className="display-4">Hello Guys!</h1>
            <p className="lead">Idhar Sabka Kala Chitta Hai</p>
            <span className="btn btn-sm btn-info mr-2">Date:</span>
            <Dtpicker
              selectedDate={selectedDate}
              onChange={this.handleDateChange}
            />
          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm-2">
              <ListGroup
                onSelect={this.handleSelect}
                currentItem={selectedClass}
                items={classes}
              />
            </div>
            <div className="col">
              <PreviousAttendaceTable
                columns={columnsPrev}
                selectedClass={selectedClass}
                selectedDate={selectedDate}
                attendanceList={attendanceList}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PreviousAttendance;
