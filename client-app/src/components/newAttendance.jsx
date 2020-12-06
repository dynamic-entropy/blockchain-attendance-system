import React, { Component } from "react";
import { columnsNew } from "./../services/tableColumns";
import StudentsTable from "./studentsTable";
import { classes } from "./../services/classService";
import ListGroup from "./common/listGroup";
import { done } from "../services/tempAttendanceStore";
import { getList, updateList } from "../services/tempAttendanceStore";

import { options } from "./../config/drizzleOptions";
import { Drizzle, generateStore } from "@drizzle/store";
import DrizzleConsumer from "./drizzleConsumer";
import { DrizzleContext } from "@drizzle/react-plugin";

const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

class NewAttendance extends Component {
  state = { selectedClass: classes[2], attendanceList: [] };

  componentDidMount() {
    done(this.state.selectedClass);
    const attendanceList = getList();
    this.setState({ attendanceList });
  }

  handleSelect = (item) => {
    done(item);
    this.setState({ selectedClass: item, attendanceList: getList() });
  };

  handleToggle = ({ id }) => {
    updateList(id);
    const attendanceList = getList();
    this.setState({ attendanceList });
  };

  render() {
    const date = new Date();
    return (
      <React.Fragment>
        <div
          className="jumbotron"
          style={{ paddingTop: 10, paddingBottom: 10 }}
        >
          <div className="ml-5">
            <h1 className="display-4">Hello Guys!</h1>
            <p className="lead">Attendance Lagalo</p>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-3">
              <div className="btn btn-outline-info btn-block mb-3">
                {date.toLocaleDateString()}
              </div>
              <ListGroup
                onSelect={this.handleSelect}
                currentItem={this.state.selectedClass}
                items={classes}
              />
            </div>
            <div className="col">
              <StudentsTable
                columns={columnsNew}
                selectedClass={this.state.selectedClass}
                onToggle={this.handleToggle}
                attendanceList={this.state.attendanceList}
              />
              <DrizzleContext.Provider drizzle={drizzle}>
                <DrizzleConsumer
                  attendanceList={this.state.attendanceList}
                  selectedClass={this.state.selectedClass}
                  selectedDate={date}
                />
              </DrizzleContext.Provider>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NewAttendance;
