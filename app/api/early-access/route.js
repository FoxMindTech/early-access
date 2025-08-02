//app/api/early-access/route.js

import { connectDB } from "@/lib/db";
import EarlyAccess from "@/modals/EarlyAccess";
import {
  isEmail,
  escape,
  trim,
  normalizeEmail,
  isMobilePhone,
} from "validator";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    // Trim, sanitize and normalize
    const name = escape(trim(body?.name || ""));
    const rawEmail = trim(body?.email || "");
    const email = normalizeEmail(rawEmail, { gmail_remove_dots: false }) || "";
    const number = escape(trim(body?.number || ""));

    // Validation
    if (
      !name ||
      !email ||
      !isEmail(email) ||
      name.length > 100 ||
      email.length > 100
    ) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid input data." }),
        { status: 400 }
      );
    }

    // If number is provided, validate it
    if (number && (number.length > 20 || !isMobilePhone(number, "any"))) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid phone number." }),
        { status: 400 }
      );
    }

    // Check for duplicate email
    const exists = await EarlyAccess.findOne({ email }).lean();
    if (exists) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "This email is already registered.",
        }),
        { status: 409 }
      );
    }

    try {
      console.log("runnnnn 1");
      const data = await EarlyAccess.create({
        name,
        email,
        number: number || undefined,
      });
      console.log("runnnnn 2", data);
    } catch (err) {
      console.error("DB Create Error:", err);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Successfully joined the waitlist",
      }),
      { status: 201 }
    );
  } catch (error) {
    if (error.code === 11000) {
      return new Response(
        JSON.stringify({ success: false, message: "Email already exists." }),
        { status: 409 }
      );
    }

    return new Response(
      JSON.stringify({ success: false, message: "Server error." }),
      { status: 500 }
    );
  }
}

// --- GET: Get Early Access Count ---
export async function GET() {
  try {
    await connectDB();
    const count = await EarlyAccess.countDocuments();

    return new Response(JSON.stringify({ success: true, count }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: "Failed to fetch count." }),
      { status: 500 }
    );
  }
}
