import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query") || "";
    const {history} = await request.json();
    console.log("history", history);
    if (!query) {
      return NextResponse.json(
        { error: "Query parameter is required" },
        { status: 400 }
      );
    }
    const t = new AbortController();
    const signal = t.signal;
    const n = setTimeout(() => {
      t.abort();
    }, 2e4);
    
    try {
      const response = await fetch(
        process.env.isDev
          ? "http://localhost:4000"
          : "https://api.omarbradai.tn",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ input: query }),
          signal: signal,
        }
      );

      clearTimeout(n);
      if (!response.ok) {
        return NextResponse.json(
          { error: "Failed to fetch data" },
          { status: 500 }
        );
      }
      const data = await response.json();
      console.log("Data received:", data);
      return NextResponse.json({ data: data.response }, { status: 200 });
    } catch (error) {
      clearTimeout(n);
      console.error("Error fetching data:", error);
      return NextResponse.json(
        { error: "Failed to fetch data" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
