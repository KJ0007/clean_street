import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Camera, Users, Award, TrendingUp, CheckCircle } from "lucide-react"

export default function HomePage() {
  const stats = [
    { label: "Reports Submitted", value: "2,847", icon: Camera },
    { label: "Issues Resolved", value: "2,234", icon: CheckCircle },
    { label: "Active Users", value: "1,456", icon: Users },
    { label: "Response Rate", value: "78%", icon: TrendingUp },
  ]

  const recentReports = [
    { id: 1, location: "Main Street & 5th Ave", status: "resolved", time: "2 hours ago" },
    { id: 2, location: "Park Avenue", status: "in-progress", time: "4 hours ago" },
    { id: 3, location: "Downtown Plaza", status: "pending", time: "6 hours ago" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-green-800">CleanStreet</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/reports" className="text-gray-600 hover:text-green-600">
              View Reports
            </Link>
            <Link href="/leaderboard" className="text-gray-600 hover:text-green-600">
              Leaderboard
            </Link>
            <Link href="/admin" className="text-gray-600 hover:text-green-600">
              Admin
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/report">Report Issue</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Keep Our Streets <span className="text-green-600">Clean</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Report road waste instantly with photos and location. Help municipal officers respond faster and make our
            community cleaner together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/report">
                <Camera className="w-5 h-5 mr-2" />
                Report Waste Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/reports">
                <MapPin className="w-5 h-5 mr-2" />
                View Reports
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Community Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="w-8 h-8 text-green-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Camera className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>1. Report</CardTitle>
                <CardDescription>
                  Take a photo of road waste and share your location. Add details about the issue.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>2. Review</CardTitle>
                <CardDescription>
                  Municipal officers receive your report and assign cleanup teams to address the issue.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>3. Reward</CardTitle>
                <CardDescription>
                  Earn points for reporting and get recognized on our community leaderboard.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Activity</h2>
          <div className="max-w-2xl mx-auto">
            {recentReports.map((report) => (
              <Card key={report.id} className="mb-4">
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="font-medium">{report.location}</div>
                      <div className="text-sm text-gray-500">{report.time}</div>
                    </div>
                  </div>
                  <Badge
                    variant={
                      report.status === "resolved"
                        ? "default"
                        : report.status === "in-progress"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {report.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/reports">View All Reports</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">CleanStreet</span>
              </div>
              <p className="text-gray-400">Making our communities cleaner, one report at a time.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/report" className="hover:text-white">
                    Report Issue
                  </Link>
                </li>
                <li>
                  <Link href="/reports" className="hover:text-white">
                    View Reports
                  </Link>
                </li>
                <li>
                  <Link href="/leaderboard" className="hover:text-white">
                    Leaderboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Officials</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/admin" className="hover:text-white">
                    Admin Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/admin/reports" className="hover:text-white">
                    Manage Reports
                  </Link>
                </li>
                <li>
                  <Link href="/admin/analytics" className="hover:text-white">
                    Analytics
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CleanStreet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
