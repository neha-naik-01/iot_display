"use client";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Calendar from "./calendar";
import moment from "moment";

const Main = ({
  firstDate,
  lastDate,
  deviceList,
  pageiotdata,
  getDatesOfMonth,
}) => {
  const [count, setCount] = useState(0);
  const [device, setDevice] = useState("");
  const [iotData, setIotData] = useState(pageiotdata);
  const initialized = useRef(false);

  useEffect(() => {
    const updateIotData = async () => {
      try {
        const response = await axios.post("../api/data/postdata", {
          // selectedAc: deviceLabel,
          selectedAc: device,
        });

        setIotData(
          response.data.response.map((item, index) => ({
            date: item._id,
            temp: item.roomTemp,
          }))
        );
      } catch (error) {
        console.log("config :- ", error.message);
      }
    };

    if (device.length > 0) {
      updateIotData();
    }
  }, [device]);

  return (
    <div>
      {deviceList &&
        deviceList.map((dvl) => (
          <div key={dvl.value}>
            {/* <button type="button" onClick={() => updateIotData(dvl.label)}> */}
            <button onClick={() => setDevice(dvl.label)}>{dvl.label}</button>
            {/* {dvl.label}
            </button> */}
          </div>
        ))}
      <Calendar
        firstDate={firstDate}
        lastDate={lastDate}
        iotData={iotData}
        getDatesOfMonth={getDatesOfMonth}
      />
    </div>
  );
};

export default Main;
