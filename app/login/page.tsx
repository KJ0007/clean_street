"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { MapPin, Mail, Lock, User, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    // Redirect to dashboard
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate signup
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    // Redirect to dashboard
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-green-800">CleanStreet</span>
          </div>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Welcome Back</CardTitle>
                <CardDescription>Sign in to your account to continue reporting and tracking issues</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input id="email" type="email" placeholder="Enter your email" className="pl-10" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>

                <div className="mt-4">
                  <Separator className="my-4" />
                  <div className="text-center">
                    <Button variant="link" className="text-sm">
                      Forgot your password?
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Create Account</CardTitle>
                <CardDescription>Join our community and start making a difference in your neighborhood</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input id="name" type="text" placeholder="Enter your full name" className="pl-10" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input id="signup-email" type="email" placeholder="Enter your email" className="pl-10" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="Create a password"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </form>

                <div className="mt-4">
                  <Separator className="my-4" />
                  <p className="text-xs text-gray-600 text-center">
                    By creating an account, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Municipal officers?{" "}
            <Link href="/admin" className="text-green-600 hover:underline">
              Access admin portal
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
