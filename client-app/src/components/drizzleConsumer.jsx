import React from "react";
import MyDrizzleApp from "./myDrizzleApp";
import { DrizzleContext } from "@drizzle/react-plugin";

const DrizzleConsumer = (props) => {
  return (
    <DrizzleContext.Consumer>
      {(drizzleContext) => {
        const { drizzle, drizzleState, initialized } = drizzleContext;
        const { attendanceList, selectedDate, selectedClass } = props;

        if (!initialized) {
          return (
            <div className="d-flex justify-content-center">
              <div className="m-5">
                <h3>Loading...</h3>
              </div>
              <div className="m-5 spinner-border"></div>
            </div>
          );
        }

        return (
          <MyDrizzleApp
            drizzle={drizzle}
            drizzleState={drizzleState}
            attendanceList={attendanceList}
            selectedClass={selectedClass}
            selectedDate={selectedDate}
          />
        );
      }}
    </DrizzleContext.Consumer>
  );
};

export default DrizzleConsumer;
