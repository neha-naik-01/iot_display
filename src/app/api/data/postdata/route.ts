// import { NextRequest, NextResponse } from "next/server";
// import { promises as fs } from "fs";

// export async function POST(request: NextRequest) {
//   try {
//     const reqBody = await request.json();
//     const { selectedAc } = reqBody;
//     console.log("body : ", reqBody);

//     //get iotdata for seleted ac
//     const response = await fs.readFile(
//       process.cwd() + `/public/iotdata/roomtemp_${selectedAc}.json`,
//       "utf8"
//     );
//     const iotData = JSON.parse(response);

//     return NextResponse.json({
//       message: "User created successfully",
//       success: true,
//       iotData,
//     });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.mesage }, { status: 500 });
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";

export async function POST(request: NextRequest) {
  var test = "";

  try {
    const reqBody = await request.json();
    const { selectedAc } = reqBody;
    // console.log("body : ", selectedAc);

    test = selectedAc;

    //get iotdata for seleted ac
    const response = JSON.parse(
      await fs.readFile(
        process.cwd() + `/public/iotdata/roomtemp_${selectedAc}.json`,
        "utf8"
      )
    );

    return NextResponse.json({
      message: "Data fetched successfully",
      success: true,
      response,
      selectedAc,
    });

    console.log(response);
  } catch (error: any) {
    return NextResponse.json({ error: error.mesage }, { status: 500 });
  }
}
