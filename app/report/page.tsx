"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Camera, MapPin, Upload, CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ReportPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    type: "",
    description: "",
    location: "",
    photo: null as File | null,
    severity: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({ ...formData, photo: file })
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setStep(4)
  }

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setFormData({
          ...formData,
          location: `${position.coords.latitude.toFixed(6)}, ${position.coords.longitude.toFixed(6)}`,
        })
      })
    }
  }

  if (step === 4) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Report Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for helping keep our streets clean. Your report has been sent to municipal officers.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/reports">View All Reports</Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/report">Submit Another Report</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </Button>
          <h1 className="text-xl font-semibold">Report Road Waste</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          {[1, 2, 3].map((stepNum) => (
            <div key={stepNum} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNum ? "bg-green-600 text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                {stepNum}
              </div>
              {stepNum < 3 && <div className={`w-16 h-1 mx-2 ${step > stepNum ? "bg-green-600" : "bg-gray-200"}`} />}
            </div>
          ))}
        </div>

        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Upload Photo</CardTitle>
              <CardDescription>Take or upload a clear photo of the road waste issue</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                {formData.photo ? (
                  <div>
                    <img
                      src={URL.createObjectURL(formData.photo) || "/placeholder.svg"}
                      alt="Uploaded"
                      className="max-w-full h-48 object-cover mx-auto rounded-lg mb-4"
                    />
                    <p className="text-sm text-gray-600">{formData.photo.name}</p>
                  </div>
                ) : (
                  <div>
                    <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Upload a photo of the waste</p>
                  </div>
                )}
                <Input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" id="photo-upload" />
                <Label htmlFor="photo-upload">
                  <Button variant="outline" className="cursor-pointer">
                    <Upload className="w-4 h-4 mr-2" />
                    {formData.photo ? "Change Photo" : "Upload Photo"}
                  </Button>
                </Label>
              </div>
              <Button onClick={() => setStep(2)} disabled={!formData.photo} className="w-full">
                Next: Add Details
              </Button>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Report Details</CardTitle>
              <CardDescription>Provide information about the waste issue</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="type">Type of Waste</Label>
                <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select waste type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="litter">General Litter</SelectItem>
                    <SelectItem value="plastic">Plastic Waste</SelectItem>
                    <SelectItem value="organic">Organic Waste</SelectItem>
                    <SelectItem value="construction">Construction Debris</SelectItem>
                    <SelectItem value="hazardous">Hazardous Materials</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="severity">Severity Level</Label>
                <Select
                  value={formData.severity}
                  onValueChange={(value) => setFormData({ ...formData, severity: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - Minor litter</SelectItem>
                    <SelectItem value="medium">Medium - Noticeable waste</SelectItem>
                    <SelectItem value="high">High - Large amount</SelectItem>
                    <SelectItem value="urgent">Urgent - Hazardous/Blocking</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the waste issue in detail..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                />
              </div>

              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button onClick={() => setStep(3)} disabled={!formData.type || !formData.severity} className="flex-1">
                  Next: Add Location
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Location</CardTitle>
              <CardDescription>Add the exact location of the waste issue</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="location">Location Details</Label>
                <div className="flex gap-2">
                  <Input
                    id="location"
                    placeholder="Enter address or coordinates"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="flex-1"
                  />
                  <Button variant="outline" onClick={getCurrentLocation}>
                    <MapPin className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-500">Click the location icon to use your current location</p>
              </div>

              {/* Summary */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium mb-3">Report Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <Badge variant="outline">{formData.type}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Severity:</span>
                    <Badge variant={formData.severity === "urgent" ? "destructive" : "secondary"}>
                      {formData.severity}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Photo:</span>
                    <span>✓ Uploaded</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button onClick={handleSubmit} disabled={!formData.location || isSubmitting} className="flex-1">
                  {isSubmitting ? "Submitting..." : "Submit Report"}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
