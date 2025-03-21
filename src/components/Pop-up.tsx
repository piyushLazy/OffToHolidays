"use client";

import React, { useState  } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { X } from "lucide-react";


// ✅ Form Schema
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  contact: z.string().min(10, "Enter a valid contact number"),
  destination: z.string().min(1, "Select a destination"),
  nights: z.string().min(1, "Enter number of nights"),
  hotelType: z.string().optional(),
  contactTime: z.string().optional(),
  additionalDetails: z.string().optional(),
});

const TripPlanningForm = ({ onClose }: { onClose: () => void }) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [destination, setDestination] = useState("");
  const [hotelType, setHotelType] = useState("");





  // ✅ Handle Errors Separately
  const handleErrors = () => {
    if (Object.keys(errors).length > 0) {
      const errorMessages = Object.values(errors).map((err) => err?.message);
  
      toast(
        <div className="  px-4 py-2 rounded-md">
          <strong>Form Errors:</strong>
          <ul className="list-disc ml-4">
            {errorMessages.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
        </div>,
        { duration: 5000 }
      );
    }
  };
  
  // submit function 
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast.success("Trip details submitted successfully!");
    console.log(data);
  
    onClose(); // ✅ Close the popup after submission
  };
  
  return (
    <div className="relative p-4 max-w-xl mx-auto rounded-lg shadow-md pt-16 mt-20 z-[90]">
      {/* Close Button */}
      <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition" onClick={onClose}>
        <X size={20} />
      </button>

      <h2 className="text-xl font-semibold text-center mb-3">Plan Your Trip!</h2>

      {/* ✅ Handle Errors Here */}
      <form onSubmit={handleSubmit(onSubmit, handleErrors)} className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <Input {...register("name")} className="h-9" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <Input {...register("email")} className="h-9" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Contact Number</label>
            <Input {...register("contact")} className="h-9" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Number of Nights</label>
            <Input {...register("nights")} className="h-9" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Destination</label>
            <Select
              value={destination}
              onValueChange={(value) => {
                setDestination(value);
                setValue("destination", value);
              }}
            >
              <SelectTrigger className="w-full h-9">
                <SelectValue placeholder="Choose destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bali">Bali</SelectItem>
                <SelectItem value="paris">Paris</SelectItem>
                <SelectItem value="maldives">Maldives</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Preferred Hotel Type</label>
            <Select
              value={hotelType}
              onValueChange={(value) => {
                setHotelType(value);
                setValue("hotelType", value);
              }}
            >
              <SelectTrigger className="w-full h-9">
                <SelectValue placeholder="Select hotel type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="budget">Budget</SelectItem>
                <SelectItem value="luxury">Luxury</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Best Time to Connect</label>
            <Input {...register("contactTime")} className="h-9" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Additional Details</label>
          <textarea {...register("additionalDetails")} className="w-full border rounded-md p-2 h-20 text-sm" />
        </div>

        <div className="flex justify-between mt-3">
          <Button type="submit" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-serif rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 w-full text-md ">
            Send Details
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TripPlanningForm;
