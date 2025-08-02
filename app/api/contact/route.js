import { connectDB } from "@/lib/db";
import { Contact } from "@/modals/Contact";
import validator from "validator";

function sanitizeInput(input) {
  return validator.escape(validator.trim(input));
}

export async function POST(req) {
  await connectDB();

  const { name, email, message, number } = await req.json();

  try {
    // Validate & sanitize
    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!validator.isEmail(email)) {
      return Response.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      message: sanitizeInput(message),
      number: number ? sanitizeInput(number) : "", // Optional
    };

    const contact = new Contact(sanitizedData);
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
