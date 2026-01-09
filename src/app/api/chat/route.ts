import { NextRequest, NextResponse } from "next/server";

// Get the internal API URL from an environment variable
// This is the direct address of your backend container
const BACKEND_URL = process.env.INTERNAL_API_URL || "http://localhost:4000";
import axios from "axios";

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query") || "";
    // const body = await request.json();
    // const history = body.history;
    // console.log(history);

    if (!query) {
      return NextResponse.json(
        { error: "Query parameter is required" },
        { status: 400 }
      );
    }
    console.log(`${BACKEND_URL}/api/agent`);
    const res = await axios.post(
      `${BACKEND_URL}/api/agent`,
      { input: query },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await res.data;
    console.log("Response from backend:", data);

    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
