"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Search, Filter, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  const reports = [
    {
      id: 1,
      type: "plastic",
      description: "Large pile of plastic bottles and containers near the bus stop",
      location: "Main Street & 5th Avenue",
      status: "resolved",
      severity: "medium",
      submittedBy: "John D.",
      submittedAt: "2024-01-15T10:30:00Z",
      resolvedAt: "2024-01-16T14:20:00Z",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      type: "litter",
      description: "Scattered food containers and paper waste in park area",
      location: "Central Park, North Entrance",
      status: "in-progress",
      severity: "low",
      submittedBy: "Sarah M.",
      submittedAt: "2024-01-14T16:45:00Z",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      type: "construction",
      description: "Construction debris blocking sidewalk access",
      location: "Oak Street Construction Site",
      status: "pending",
      severity: "high",
      submittedBy: "Mike R.",
      submittedAt: "2024-01-14T09:15:00Z",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      type: "hazardous",
      description: "Broken glass and chemical containers",
      location: "Industrial District, Warehouse Row",
      status: "urgent",
      severity: "urgent",
      submittedBy: "Lisa K.",
      submittedAt: "2024-01-13T20:30:00Z",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      type: "organic",
      description: "Food waste and organic matter near restaurant",
      location: "Restaurant District, Food Court",
      status: "resolved",
      severity: "medium",
      submittedBy: "Tom W.",
      submittedAt: "2024-01-12T12:00:00Z",
      resolvedAt: "2024-01-13T08:30:00Z",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "resolved":
        return "default"
      case "in-progress":
        return "secondary"
      case "pending":
        return "outline"
      case "urgent":
        return "destructive"
      default:
        return "outline"
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "urgent":
        return "destructive"
      case "high":
        return "destructive"
      case "medium":
        return "secondary"
      case "low":
        return "outline"
      default:
        return "outline"
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      report.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || report.status === statusFilter
    const matchesType = typeFilter === "all" || report.type === typeFilter

    return matchesSearch && matchesStatus && matchesType
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </Button>
          <h1 className="text-xl font-semibold">Community Reports</h1>
          <div className="ml-auto">
            <Button asChild>
              <Link href="/report">Report New Issue</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filter Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search location or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="litter">General Litter</SelectItem>
                  <SelectItem value="plastic">Plastic Waste</SelectItem>
                  <SelectItem value="organic">Organic Waste</SelectItem>
                  <SelectItem value="construction">Construction Debris</SelectItem>
                  <SelectItem value="hazardous">Hazardous Materials</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReports.map((report) => (
            <Card key={report.id} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image src={report.image || "/placeholder.svg"} alt="Report image" fill className="object-cover" />
                <div className="absolute top-2 right-2">
                  <Badge variant={getStatusColor(report.status)}>{report.status}</Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex gap-2">
                    <Badge variant={getSeverityColor(report.severity)} className="text-xs">
                      {report.severity}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {report.type}
                    </Badge>
                  </div>
                </div>

                <h3 className="font-medium mb-2 line-clamp-2">{report.description}</h3>

                <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="truncate">{report.location}</span>
                </div>

                <div className="space-y-1 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>Reported: {formatDate(report.submittedAt)}</span>
                  </div>
                  {report.resolvedAt && (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>Resolved: {formatDate(report.resolvedAt)}</span>
                    </div>
                  )}
                  <div>By: {report.submittedBy}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredReports.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No reports found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
              <Button asChild>
                <Link href="/report">Report New Issue</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
