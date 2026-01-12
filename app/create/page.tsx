"use client";

import { MultiStepForm } from "@/components/create-trip/MultiStepForm";
import { TripPreview } from "@/components/create-trip/TripPreview";
import { Trip } from "@/lib/types";
import { useState } from "react";

export default function CreateTripPage() {
  const [previewData, setPreviewData] = useState<Partial<Trip>>({});

  return (
    <div className="min-h-screen pt-20 pb-20 container mx-auto px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-blue to-soft-purple inline-block mb-2">
          Create a New Trip
        </h1>
        <p className="text-gray-500 text-lg">
          Plan your next adventure and find your tribe.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        {/* Form Side */}
        <div>
          <MultiStepForm onUpdate={setPreviewData} />
        </div>

        {/* Preview Side - Sticky */}
        <div className="hidden lg:block lg:sticky lg:top-24">
          <TripPreview data={previewData} />
        </div>
      </div>
    </div>
  );
}
