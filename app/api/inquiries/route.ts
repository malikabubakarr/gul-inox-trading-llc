// app/api/inquiries/route.ts
import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { Inquiry } from '@/models/Inquiry'; // Changed to named import

// Connect to MongoDB (reuse connection if already connected)
async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) return;
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log('Connected to MongoDB');
  } catch (connectError) {
    console.error('MongoDB connection error:', connectError);
    throw connectError;
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();

    // Fetch all inquiries, sorted by creation date (newest first)
    const inquiries = await Inquiry.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ inquiries }, { status: 200 });
  } catch (error: any) {
    console.error('Error in GET /api/inquiries:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message || 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const { name, email, phone, company, quantity, message } = await request.json();
    console.log('Received data:', { name, email, phone, company, quantity, message }); // Log incoming data

    // Basic server-side validation
    if (!name || !email || !phone || !company || !quantity || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Create and save the inquiry
    const newInquiry = new Inquiry({ name, email, phone, company, quantity, message });
    console.log('Created inquiry object:', newInquiry); // Log before save
    await newInquiry.save();
    console.log('Inquiry saved successfully');

    return NextResponse.json({ message: 'Inquiry submitted successfully' }, { status: 201 });
  } catch (error: any) {
    console.error('Error in POST /api/inquiries:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message || 'Unknown error' },
      { status: 500 }
    );
  }
}