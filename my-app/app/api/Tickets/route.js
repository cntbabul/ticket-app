import Ticket from "../../../app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;
    // console.log(ticketData);
    // console.log(body);
    await Ticket.create(ticketData);
    return NextResponse.json({ message: "Ticket created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Ticket Creating failed", error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Ticket Fetching failed", error },
      { status: 500 }
    );
  }
}
