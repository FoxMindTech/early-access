import { connectDB } from "@/lib/db";
import { Contact } from "@/modals/Contact";

export async function POST(req) {
  await connectDB();
  const body = await req.json();

  try {
    const contact = new Contact(body);
    await contact.save();
    return Response.json({ success: true, contact });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectDB();

  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return Response.json({ success: true, contacts });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
