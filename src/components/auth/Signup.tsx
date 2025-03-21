"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner"; // Import Sonner toast

interface SignupProps {
  setSignup: (value: boolean) => void;
}

const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
  });

export default function SignUpForm({ setSignup }: SignupProps) {
  const {
    register,
    handleSubmit,
  } = useForm({ resolver: zodResolver(signUpSchema) });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const onSubmit = (data: { email: string; password: string; confirmPassword: string }) => {
    console.log("User Data:", data);
    toast.success("Account created successfully! 🎉", {
      description: "You can now log in with your credentials.",
    });
  };

  return (
    <div className="w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center">Join Lazy Yatra</h2>
      <p className="text-gray-600 text-center mb-4">Create an account to start your journey.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <div>
          <Label>Email Address</Label>
          <Input {...register("email")} className="mt-2" placeholder="johndoe@gmail.com" />
        </div>

        {/* Password */}
        <div className="relative">
          <Label>Password</Label>
          <Input type={showPassword ? "text" : "password"} className="mt-2" {...register("password")} />
          <button
            type="button"
            className="absolute right-2 top-8 text-gray-500"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <Label>Confirm Password</Label>
          <Input type={showConfirmPassword ? "text" : "password"} className="mt-2" {...register("confirmPassword")} />
          <button
            type="button"
            className="absolute right-2 top-8 text-gray-500"
            onClick={toggleConfirmPasswordVisibility}
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <p className="text-sm text-gray-500">By signing in, you accept Lazy Yatra’s terms.</p>

        <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-lg font-semibold">
          Sign Up
        </Button>
      </form>

      <p className="text-sm text-center mt-4">
        Already have an account?{" "}
        <span onClick={() => setSignup(false)} className="text-blue-600 cursor-pointer hover:underline">
          Log in
        </span>
      </p>
    </div>
  );
}
