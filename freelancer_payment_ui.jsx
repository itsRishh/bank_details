
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PaymentDetails() {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center p-4">
      <Card className="bg-zinc-100 border-zinc-300 w-full max-w-lg rounded-2xl shadow-xl">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-center">Bank Transfer Details</h2>

          <div className="space-y-2 text-base">
            <div>
              <strong>Account Holder Name:</strong> Rishh Sharma
            </div>
            <div>
              <strong>Bank Name:</strong> HDFC Bank
            </div>
            <div>
              <strong>Account Number:</strong> 123456789012
            </div>
            <div>
              <strong>IFSC Code:</strong> HDFC0001234 (for domestic transfers)
            </div>
            <div>
              <strong>SWIFT Code:</strong> HDFCINBBXXX (for international transfers)
            </div>
            <div>
              <strong>UPI ID (Optional):</strong> rishh@upi (if the client prefers digital payments)
            </div>
          </div>

          <p className="text-sm text-zinc-600">
            Please confirm once the transfer has been made. Let me know if you require a formal invoice or receipt for your records—I’ll be happy to provide it.
          </p>

          <div className="pt-4 border-t border-zinc-300 text-sm space-y-1">
            <p>Thank you for your business and continued trust.</p>
            <p className="font-medium">Warm regards,</p>
            <p className="font-medium">Rishh Sharma</p>
            <p>Freelance Web Developer</p>
            <p>Email: rishh@example.com | Contact: +91-9876543210</p>
            <p>Portfolio: www.rishhportfolio.com</p>
          </div>

          <div className="pt-4 text-center">
            <Button className="bg-black text-white hover:bg-zinc-800 font-medium">Download PDF</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
