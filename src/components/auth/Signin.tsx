"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

interface SignupProps {
  setSignup: (value: boolean) => void;
}

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function LoginForm({ setSignup }: SignupProps) {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: { email: string; password: string }) => {
    toast.success("Logged in successfully!");
    console.log(data);
  };

  return (
    <div className="w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-2">Welcome Back!</h2>
      <p className="text-center text-gray-500 mb-6">Log in to continue your journey.</p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <Label>Email Address</Label>
          <Input {...register("email")} type="email" placeholder="johndoe@gmail.com" className="mt-2" />
        </div>

        <div className="relative">
          <Label>Password</Label>
          <Input {...register("password")} type={showPassword ? "text" : "password"} className="mt-2" />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute top-8 right-3 text-gray-500">
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className="flex justify-between text-sm text-gray-600">
          <Link href="#" className="hover:underline">Forgot Password?</Link>
        </div>

        <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-lg font-semibold">
          Sign in
        </Button>
      </form>
      
      <p className="text-center text-sm mt-4 text-gray-600">
        New to Lazy Yatra? <span onClick={() => setSignup(true)} className="text-blue-500 cursor-pointer hover:underline">Create an Account</span>
      </p>

    </div>
  );
}
