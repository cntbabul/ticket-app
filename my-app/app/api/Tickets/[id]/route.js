import Ticket from '@/app/(models)/Ticket';
import { NextResponse } from 'next/server';


export async function GET(req, {params}) {
    try {
        const {id} = await params;
        const foundTicket = await Ticket.findOne({_id: id});
        return NextResponse.json(foundTicket, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to fetch ticket" }, { status: 500 });
    }
}


export async function DELETE(req, {params}){
    
    try {
        const {id} = await params;
        await Ticket.findByIdAndDelete(id);
        return NextResponse.json({ message: "Ticket deleted" }, { status: 200 }); 
        console.log( "params",params);
        console.log({id});
    } catch (error) {
        return NextResponse.json({ message: "Failed to delete ticket" }, { status: 500 });
    }
  
console.log("Ticket deleted");
console.log( "params",params);

}