"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GradientButton } from "@/components/shared/GradientButton";
import { Trip } from "@/lib/types";
import { ArrowRight, ArrowLeft, Upload, Check } from "lucide-react";

interface MultiStepFormProps {
  onUpdate: (data: Partial<Trip>) => void;
}

export function MultiStepForm({ onUpdate }: MultiStepFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<Trip>>({
    tags: [],
    images: [],
  });

  const handleChange = (field: keyof Trip, value: any) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onUpdate(newData);
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  return (
    <div className="w-full max-w-lg mx-auto bg-white/50 dark:bg-black/20 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-8 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-sky-blue to-soft-purple"
          initial={{ width: 0 }}
          animate={{ width: `${(step / 4) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Basics */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-blue to-soft-purple">
              Let's start with the basics
            </h2>

            <div className="space-y-2">
              <Label>Trip Title</Label>
              <Input
                placeholder="e.g. Bali Digital Nomad Retreat"
                value={formData.title || ""}
                onChange={(e) => handleChange("title", e.target.value)}
                className="bg-white/50 border-white/20 focus:ring-sky-blue"
              />
            </div>

            <div className="space-y-2">
              <Label>Destination</Label>
              <Input
                placeholder="Where are you going?"
                value={formData.destination || ""}
                onChange={(e) => handleChange("destination", e.target.value)}
                className="bg-white/50 border-white/20"
              />
            </div>
          </motion.div>
        )}

        {/* Step 2: Details */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">Trip Details</h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Start Date</Label>
                <Input
                  type="date"
                  onChange={(e) => handleChange("startDate", e.target.value)}
                  className="bg-white/50"
                />
              </div>
              <div className="space-y-2">
                <Label>End Date</Label>
                <Input
                  type="date"
                  onChange={(e) => handleChange("endDate", e.target.value)}
                  className="bg-white/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                placeholder="Tell us about the trip..."
                className="bg-white/50 min-h-[100px]"
                value={formData.description || ""}
                onChange={(e) => handleChange("description", e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Cost ($)</Label>
                <Input
                  type="number"
                  placeholder="1200"
                  onChange={(e) => handleChange("cost", e.target.value)}
                  className="bg-white/50"
                />
              </div>
              <div className="space-y-2">
                <Label>Max Members</Label>
                <Input
                  type="number"
                  placeholder="10"
                  onChange={(e) => handleChange("maxMembers", e.target.value)}
                  className="bg-white/50"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Photos & Tags */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">Photos & Tags</h2>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 flex flex-col items-center justify-center text-gray-400 hover:bg-white/10 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 mb-2" />
              <span className="text-sm">Click to upload cover image</span>
            </div>

            <div className="space-y-2">
              <Label>Tags (comma separated)</Label>
              <Input
                placeholder="Hiking, Beach, Coworking..."
                onChange={(e) =>
                  handleChange(
                    "tags",
                    e.target.value.split(",").map((s) => s.trim())
                  )
                }
                className="bg-white/50"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {formData.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 4: Review */}
        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6 text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold">Ready to Launch?</h2>
            <p className="text-gray-500">
              Your trip looks amazing! Ready to invite travelers?
            </p>

            <GradientButton
              size="lg"
              className="w-full h-12 text-lg mt-4 shadow-xl"
            >
              Publish Trip 🚀
            </GradientButton>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8 pt-6 border-t border-gray-100 dark:border-white/10">
        {step > 1 ? (
          <button
            onClick={prevStep}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors px-4 py-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        ) : (
          <div />
        )}

        {step < 4 && (
          <GradientButton
            onClick={nextStep}
            className="flex items-center gap-2 px-6"
          >
            Next <ArrowRight className="w-4 h-4" />
          </GradientButton>
        )}
      </div>
    </div>
  );
}
