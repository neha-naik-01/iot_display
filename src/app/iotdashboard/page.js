"use server";
import { unstable_noStore as noStore } from "next/cache";
import { promises as fs } from "fs";
import Main from "../comp/main";
import Select from "react-select";
import moment from "moment";

export default async function IotDashboard() {
  noStore();

  //First day date of current month
  var firstDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

  //Last day date of current month
  var lastDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0
  );

  // get ac list to diplsay
  const file = await fs.readFile(
    process.cwd() + "/public/iotdata/deviceIds.json",
    "utf8"
  );
  const data = JSON.parse(file).map((item, index) => ({
    value: index + 1,
    label: item,
  }));

  // get iotdata for seleted ac
  const response = await fs.readFile(
    process.cwd() + `/public/iotdata/roomtemp_${data[0].label}.json`,
    "utf8"
    // process.cwd() + `/public/iotdata/roomtemp_D250AC02.json`,
    // "utf8"
  );
  const iotData = JSON.parse(response).map((item, index) => ({
    date: item._id,
    temp: item.roomTemp,
  }));

  //current month dates
  const getDatesOfMonth = () => {
    // const startDate = new Date(2022, 5 - 1, 1); // Month is zero-based
    // const endDate = new Date(2022, 5, 0);

    // return Array.from({ length: endDate.getDate() }, (_, index) => {
    //   const currentDate = new Date(startDate);
    //   currentDate.setDate(startDate.getDate() + index);
    //   return {
    //     date: moment(new Date(currentDate)).format("YYYY-MM-DD"),
    //   };
    // });

    return Array.from({ length: lastDate.getDate() }, (_, index) => {
      const currentDate = new Date(firstDate);
      currentDate.setDate(firstDate.getDate() + index);
      return {
        // date1: new Date(currentDate), -- This line only for testing don't use this for further coding
        date: moment(new Date(currentDate)).format("YYYY-MM-DD"),
      };
    });
  };

  return (
    <>
      <Main
        firstDate={firstDate}
        lastDate={lastDate}
        deviceList={data}
        pageiotdata={iotData}
        getDatesOfMonth={getDatesOfMonth()}
      />
    </>
  );
}
