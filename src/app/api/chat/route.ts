import { NextRequest, NextResponse } from "next/server";

// Get the internal API URL from an environment variable
// This is the direct address of your backend container
const BACKEND_URL = process.env.INTERNAL_API_URL || "http://localhost:4000";

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query") || "";
    // Note: It's better to get 'history' from the body, not destructure it
    const body = await request.json();
    const history = body.history; 

    if (!query) {
      return NextResponse.json(
        { error: "Query parameter is required" },
        { status: 400 }
      );
    }

    const response = await fetch(`${BACKEND_URL}/`, { 
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // Pass the whole payload your backend expects
      body: JSON.stringify({ input: query, history: history }), 
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error("Backend responded with an error:", errorText);
        return NextResponse.json(
            { error: "Failed to fetch data from backend" },
            { status: response.status }
        );
    }
    const data = await response.json();
    return NextResponse.json({ data: data.response }, { status: 200 });

  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}