"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { AlertTriangle, CheckCircle, Clock, Users, TrendingUp, MapPin, Calendar, Filter } from "lucide-react"

export default function AdminDashboard() {
  const [timeFilter, setTimeFilter] = useState("week")

  const stats = [
    { label: "Total Reports", value: "2,847", change: "+12%", icon: AlertTriangle, color: "text-blue-600" },
    { label: "Resolved", value: "2,234", change: "+8%", icon: CheckCircle, color: "text-green-600" },
    { label: "Pending", value: "425", change: "+15%", icon: Clock, color: "text-orange-600" },
    { label: "Active Users", value: "1,456", change: "+5%", icon: Users, color: "text-purple-600" },
  ]

  const recentReports = [
    {
      id: 1,
      type: "hazardous",
      location: "Industrial District",
      severity: "urgent",
      status: "pending",
      submittedAt: "2024-01-15T10:30:00Z",
      submittedBy: "Lisa K.",
    },
    {
      id: 2,
      type: "construction",
      location: "Oak Street",
      severity: "high",
      status: "in-progress",
      submittedAt: "2024-01-15T09:15:00Z",
      submittedBy: "Mike R.",
    },
    {
      id: 3,
      type: "plastic",
      location: "Main Street & 5th Ave",
      severity: "medium",
      status: "resolved",
      submittedAt: "2024-01-15T08:30:00Z",
      submittedBy: "John D.",
    },
  ]

  const chartData = [
    { name: "Mon", reports: 45, resolved: 38 },
    { name: "Tue", reports: 52, resolved: 41 },
    { name: "Wed", reports: 38, resolved: 35 },
    { name: "Thu", reports: 61, resolved: 48 },
    { name: "Fri", reports: 55, resolved: 52 },
    { name: "Sat", reports: 42, resolved: 39 },
    { name: "Sun", reports: 35, resolved: 31 },
  ]

  const pieData = [
    { name: "Litter", value: 35, color: "#8884d8" },
    { name: "Plastic", value: 25, color: "#82ca9d" },
    { name: "Organic", value: 20, color: "#ffc658" },
    { name: "Construction", value: 15, color: "#ff7300" },
    { name: "Hazardous", value: 5, color: "#ff0000" },
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

  const updateReportStatus = (reportId: number, newStatus: string) => {
    // In a real app, this would make an API call
    console.log(`Updating report ${reportId} to status: ${newStatus}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <Select value={timeFilter} onValueChange={setTimeFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Filter className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600">{stat.change} from last period</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="reports">Manage Reports</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Reports Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Reports vs Resolutions</CardTitle>
                  <CardDescription>Daily comparison of reported and resolved issues</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="reports" fill="#8884d8" name="Reports" />
                      <Bar dataKey="resolved" fill="#82ca9d" name="Resolved" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Waste Types Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Waste Types Distribution</CardTitle>
                  <CardDescription>Breakdown of reported waste categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>Manage and update report statuses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report) => (
                    <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={getSeverityColor(report.severity)}>{report.severity}</Badge>
                          <Badge variant="outline">{report.type}</Badge>
                          <Badge variant={getStatusColor(report.status)}>{report.status}</Badge>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                          <MapPin className="w-4 h-4" />
                          <span>{report.location}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Calendar className="w-3 h-3" />
                          <span>
                            Reported: {formatDate(report.submittedAt)} by {report.submittedBy}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Select value={report.status} onValueChange={(value) => updateReportStatus(report.id, value)}>
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="in-progress">In Progress</SelectItem>
                            <SelectItem value="resolved">Resolved</SelectItem>
                            <SelectItem value="urgent">Urgent</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.2 hours</div>
                  <p className="text-sm text-gray-600">Average response time</p>
                  <div className="text-sm text-green-600">-15% from last month</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Resolution Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78.5%</div>
                  <p className="text-sm text-gray-600">Reports resolved</p>
                  <div className="text-sm text-green-600">+3% from last month</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    User Engagement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">92%</div>
                  <p className="text-sm text-gray-600">Active user retention</p>
                  <div className="text-sm text-green-600">+8% from last month</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
