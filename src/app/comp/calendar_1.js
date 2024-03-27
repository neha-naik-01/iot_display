// "use client";
// import React, { useEffect } from "react";
// import CalendarHeatmap from "react-calendar-heatmap";
// import moment from "moment";

// const Calendar = ({ props }) => {
//   const getDatesOfMonth = () => {
//     const startDate = new Date(2022, 5 - 1, 1); // Month is zero-based
//     const endDate = new Date(2022, 5, 0);

//     return Array.from({ length: endDate.getDate() }, (_, index) => {
//       const currentDate = new Date(startDate);
//       currentDate.setDate(startDate.getDate() + index);
//       return {
//         date: moment(new Date(currentDate)).format("YYYY-MM-DD"),
//       };
//     });

//     // return Array.from({ length: prop.lastDate.getDate() }, (_, index) => {
//     //   const currentDate = new Date(prop.firstDate);
//     //   currentDate.setDate(prop.firstDate.getDate() + index);
//     //   return {
//     //     date: new Date(currentDate),
//     //     date1: moment(new Date(currentDate)).format("YYYY-MM-DD"),
//     //   };
//     // });
//   };

//   getDatesOfMonth().map((item, index) => {
//     if (iotDataPerMonth[index] === undefined) {
//       iotDataPerMonth.push({ date: item.date, temp: "" });
//     }
//   });

//   return <div>calendar</div>;
//   // return (
//   //   <>
//   //     <CalendarHeatmap
//   //       // key={1}
//   //       // style={{ paddingBottom: 20 }}
//   //       // startDate={props.shiftDate(props.firstDate, -1)}
//   //       // endDate={props.lastDate}
//   //       startDate={props.shiftDate("2022-05-01", -1)}
//   //       endDate={"2022-05-31"}
//   //       values={props.iotDataPerMonth}
//   //       horizontal={false}
//   //       showWeekdayLabels={true}
//   //       showMonthLabels={false}
//   //       // dayOfWeek={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
//   //       gutterSize={1}
//   //       transformDayElement={
//   //         (element, value, index) => (
//   //           <g key={index}>
//   //             <text
//   //               x={element["props"].x + 4}
//   //               y={element["props"].y + -1.5}
//   //               style={{
//   //                 fontSize: "0.14em",
//   //                 fill:
//   //                   new Date(value.date).setHours(0, 0, 0, 0) ===
//   //                   new Date().setHours(0, 0, 0, 0)
//   //                     ? "#046307"
//   //                     : "#000000",
//   //                 textAnchor: "middle",
//   //                 dominantBaseline: "middle",
//   //                 alignmentBaseline: "middle",
//   //                 fontWeight:
//   //                   new Date(value.date).setHours(0, 0, 0, 0) ===
//   //                   new Date().setHours(0, 0, 0, 0)
//   //                     ? "bold"
//   //                     : "normal",
//   //               }}
//   //             >
//   //               {new Date(value.date).getDate()}
//   //             </text>
//   //             {React.cloneElement(element, {
//   //               width: "8%",
//   //               height: 5,
//   //               rx: 3,
//   //               ry: 3,
//   //             })}
//   //             <text
//   //               x={element["props"].x + 4}
//   //               y={element["props"].y + 3}
//   //               style={{
//   //                 cursor: "default",
//   //                 fontSize: "0.15em",
//   //                 fill:
//   //                   new Date(value.date).setHours(0, 0, 0, 0) ===
//   //                   new Date().setHours(0, 0, 0, 0)
//   //                     ? "#046307"
//   //                     : "#FFFF",
//   //                 textAnchor: "middle",
//   //                 dominantBaseline: "middle",
//   //                 alignmentBaseline: "middle",
//   //                 fontWeight:
//   //                   new Date(value.date).setHours(0, 0, 0, 0) ===
//   //                   new Date().setHours(0, 0, 0, 0)
//   //                     ? "bold"
//   //                     : "normal",
//   //               }}
//   //               onClick={() => {
//   //                 if (value.temp !== "") {
//   //                   this.props.barChartCalendarData(value.date);
//   //                 } else {
//   //                   this.props.barChartCalendarData(0);
//   //                 }
//   //               }}
//   //             >
//   //               {value.temp}
//   //             </text>
//   //           </g>
//   //         )
//   //         // console.log(value, index)
//   //       }
//   //     />
//   //   </>
//   // );
// };

// export default Calendar;

"use client";
import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import moment from "moment";

const Calendar = (prop) => {
  return (
    <>
      <CalendarHeatmap
        // key={1}
        // style={{ paddingBottom: 20 }}
        // startDate={prop.shiftDate(prop.firstDate, -1)}
        // endDate={prop.lastDate}
        startDate={prop.shiftDate("2022-05-01", -1)}
        endDate={"2022-05-31"}
        values={prop.iotDataPerMonth}
        horizontal={false}
        showWeekdayLabels={true}
        showMonthLabels={false}
        // dayOfWeek={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
        gutterSize={1}
        transformDayElement={
          (element, value, index) => (
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
                  if (value.temp !== "") {
                    this.props.barChartCalendarData(value.date);
                  } else {
                    this.props.barChartCalendarData(0);
                  }
                }}
              >
                {value.temp}
              </text>
            </g>
          )
          // console.log(value, index)
        }
      />
    </>
  );
};

export default Calendar;
