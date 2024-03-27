"use client";
import React from "react";
import { unstable_noStore as noStore } from "next/cache";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import moment from "moment";

const Calendarmain = ({ firstDate, lastDate, iotData, getDatesOfMonth }) => {
  noStore();

  function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }

  // for (let i = 0; i < getDatesOfMonth.length; i++) {
  //   // for (let j = 0; j < iotData.length; j++) {
  //   const dataFound = iotData.find(
  //     (el) =>
  //       new Date(el.date).getDate() ===
  //       new Date(getDatesOfMonth[i].date).getDate()
  //   );

  //   if (dataFound === undefined) {
  //   } else {
  //   }

  //   console.log(dataFound);
  // }

  const currentIotData = getDatesOfMonth.map((obj1) => {
    // fetch data only if iotdata is of current month
    if (
      new Date(getDatesOfMonth[0].date).getFullYear() ===
        new Date(iotData[0].date).getFullYear() &&
      new Date(getDatesOfMonth[0].date).getMonth() + 1 ===
        new Date(iotData[0].date).getMonth() + 1
    ) {
      const foundObj = iotData.find(
        (obj2) =>
          new Date(obj1.date).getDate() === new Date(obj2.date).getDate()
      );

      if (foundObj) {
        // Objects with matching IDs found
        return {
          date: foundObj.date,
          temp: parseFloat(foundObj.temp),
        };
      } else {
        // Objects with no match found
        return {
          date: obj1.date,
          temp: "",
        };
      }
      // if iotdata is is not of current month show empty calendar with no data
    } else {
      return {
        date: obj1.date,
        temp: "",
      };
    }
  });

  if (currentIotData.length > 0) {
    return (
      <>
        <CalendarHeatmap
          // key={1}
          // style={{ paddingBottom: 20 }}
          startDate={shiftDate(firstDate, -1)}
          endDate={lastDate}
          // startDate={shiftDate("2022-05-01", -1)}
          // endDate={"2022-05-31"}
          values={currentIotData}
          horizontal={false}
          showWeekdayLabels={true}
          showMonthLabels={false}
          // dayOfWeek={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
          gutterSize={1}
          transformDayElement={(element, value, index) => (
            // console.log(value)
            <g key={index}>
              <text
                x={element["props"].x + 4}
                y={element["props"].y + -1.5}
                style={{
                  fontSize: "0.14em",
                  fill:
                    new Date(value.date).setHours(0, 0, 0, 0) ===
                    new Date().setHours(0, 0, 0, 0)
                      ? "#046307"
                      : "#000000",
                  textAnchor: "middle",
                  dominantBaseline: "middle",
                  alignmentBaseline: "middle",
                  fontWeight:
                    new Date(value.date).setHours(0, 0, 0, 0) ===
                    new Date().setHours(0, 0, 0, 0)
                      ? "bold"
                      : "normal",
                }}
              >
                {new Date(value.date).getDate()}
              </text>
              {React.cloneElement(element, {
                width: "8%",
                height: 5,
                rx: 3,
                ry: 3,
              })}
              <text
                x={element["props"].x + 4}
                y={element["props"].y + 3}
                style={{
                  cursor: "default",
                  fontSize: "0.15em",
                  fill:
                    new Date(value.date).setHours(0, 0, 0, 0) ===
                    new Date().setHours(0, 0, 0, 0)
                      ? "#046307"
                      : "#FFFF",
                  textAnchor: "middle",
                  dominantBaseline: "middle",
                  alignmentBaseline: "middle",
                  fontWeight:
                    new Date(value.date).setHours(0, 0, 0, 0) ===
                    new Date().setHours(0, 0, 0, 0)
                      ? "bold"
                      : "normal",
                }}
                onClick={() => {
                  // if (value.temp !== "") {
                  //   this.props.barChartCalendarData(value.date);
                  // } else {
                  //   this.props.barChartCalendarData(0);
                  // }
                }}
              >
                {value.temp}
              </text>
            </g>
          )}
        />
      </>
    );
  }
};

export default Calendarmain;
