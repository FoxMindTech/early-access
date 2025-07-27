import { connectDB } from "@/lib/db";
import EarlyAccess from "@/modals/EarlyAccess";

export async function POST(req) {
  try {
    await connectDB();
    const { name, email, number } = await req.json();

    // Check if user already exists (lean for performance)
    const existing = await EarlyAccess.findOne({ email }).lean();

    if (existing) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "This email is already registered.",
        }),
        { status: 409 } // Conflict
      );
    }

    // Save new entry
    await EarlyAccess.create({ name, email, number });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Successfully joined the waitlist",
      }),
      { status: 201 }
    );
  } catch (error) {
    // If duplicate is attempted due to race condition (e.g., in production)
    if (error.code === 11000) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Email already exists",
        }),
        { status: 409 }
      );
    }

    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
}

// import { connectDB } from "@/lib/db";
// import EarlyAccess from "@/modals/EarlyAccess";

// export async function POST(req) {
//   try {
//     await connectDB();
//     const { name, email, number } = await req.json();

//     // Save entry to DB
//     console.log(name, email, number);
//     const entry = new EarlyAccess({ name, email, number });
//     await entry.save();

//     return new Response(
//       JSON.stringify({
//         success: true,
//         message: "Successfully joined the waitlist",
//       }),
//       {
//         status: 201,
//       }
//     );
//   } catch (error) {
//     return new Response(
//       JSON.stringify({ success: false, message: error.message }),
//       {
//         status: 500,
//       }
//     );
//   }
// }
