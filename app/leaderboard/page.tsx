"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Medal, Award, Star, TrendingUp, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function LeaderboardPage() {
  const topUsers = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 2450,
      reportsSubmitted: 89,
      reportsResolved: 76,
      streak: 15,
      badges: ["eco-warrior", "community-hero", "streak-master"],
      rank: 1,
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 2180,
      reportsSubmitted: 67,
      reportsResolved: 58,
      streak: 8,
      badges: ["clean-streets", "photo-pro"],
      rank: 2,
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 1950,
      reportsSubmitted: 54,
      reportsResolved: 49,
      streak: 12,
      badges: ["community-hero", "streak-master"],
      rank: 3,
    },
    {
      id: 4,
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 1720,
      reportsSubmitted: 43,
      reportsResolved: 38,
      streak: 5,
      badges: ["clean-streets"],
      rank: 4,
    },
    {
      id: 5,
      name: "Lisa Wang",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 1580,
      reportsSubmitted: 39,
      reportsResolved: 35,
      streak: 7,
      badges: ["eco-warrior"],
      rank: 5,
    },
  ]

  const achievements = [
    {
      id: "eco-warrior",
      name: "Eco Warrior",
      description: "Submitted 50+ environmental reports",
      icon: "🌱",
      rarity: "rare",
    },
    {
      id: "community-hero",
      name: "Community Hero",
      description: "Helped resolve 25+ community issues",
      icon: "🦸",
      rarity: "epic",
    },
    {
      id: "streak-master",
      name: "Streak Master",
      description: "Maintained 10+ day reporting streak",
      icon: "🔥",
      rarity: "rare",
    },
    {
      id: "clean-streets",
      name: "Clean Streets",
      description: "Focused on street cleaning reports",
      icon: "🧹",
      rarity: "common",
    },
    {
      id: "photo-pro",
      name: "Photo Pro",
      description: "Submitted high-quality photos",
      icon: "📸",
      rarity: "uncommon",
    },
  ]

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-sm font-bold text-gray-500">#{rank}</span>
    }
  }

  const getBadgeColor = (rarity: string) => {
    switch (rarity) {
      case "epic":
        return "bg-purple-100 text-purple-800"
      case "rare":
        return "bg-blue-100 text-blue-800"
      case "uncommon":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
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
          <h1 className="text-xl font-semibold">Community Leaderboard</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="leaderboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="leaderboard" className="space-y-6">
            {/* Top 3 Podium */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Top Contributors</CardTitle>
                <CardDescription className="text-center">
                  Our most active community members making a difference
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center items-end gap-8 mb-8">
                  {/* 2nd Place */}
                  <div className="text-center">
                    <div className="w-20 h-16 bg-gray-200 rounded-t-lg flex items-end justify-center pb-2">
                      <span className="text-2xl font-bold text-gray-600">2</span>
                    </div>
                    <Avatar className="w-16 h-16 mx-auto -mt-8 border-4 border-white">
                      <AvatarImage src={topUsers[1].avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {topUsers[1].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold mt-2">{topUsers[1].name}</h3>
                    <p className="text-sm text-gray-600">{topUsers[1].points} points</p>
                  </div>

                  {/* 1st Place */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-yellow-400 rounded-t-lg flex items-end justify-center pb-2">
                      <Trophy className="w-8 h-8 text-yellow-800" />
                    </div>
                    <Avatar className="w-20 h-20 mx-auto -mt-10 border-4 border-white">
                      <AvatarImage src={topUsers[0].avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {topUsers[0].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold mt-2">{topUsers[0].name}</h3>
                    <p className="text-sm text-gray-600">{topUsers[0].points} points</p>
                    <Badge className="mt-1">Champion</Badge>
                  </div>

                  {/* 3rd Place */}
                  <div className="text-center">
                    <div className="w-20 h-12 bg-amber-600 rounded-t-lg flex items-end justify-center pb-2">
                      <span className="text-2xl font-bold text-amber-100">3</span>
                    </div>
                    <Avatar className="w-16 h-16 mx-auto -mt-8 border-4 border-white">
                      <AvatarImage src={topUsers[2].avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {topUsers[2].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold mt-2">{topUsers[2].name}</h3>
                    <p className="text-sm text-gray-600">{topUsers[2].points} points</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Full Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle>Full Rankings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topUsers.map((user) => (
                    <div key={user.id} className="flex items-center gap-4 p-4 rounded-lg border hover:bg-gray-50">
                      <div className="flex items-center justify-center w-8">{getRankIcon(user.rank)}</div>

                      <Avatar className="w-12 h-12">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <h3 className="font-semibold">{user.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{user.points} points</span>
                          <span>{user.reportsSubmitted} reports</span>
                          <span className="flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            {user.streak} day streak
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-1">
                        {user.badges.slice(0, 3).map((badge) => {
                          const achievement = achievements.find((a) => a.id === badge)
                          return achievement ? (
                            <span key={badge} className="text-lg" title={achievement.name}>
                              {achievement.icon}
                            </span>
                          ) : null
                        })}
                        {user.badges.length > 3 && (
                          <span className="text-xs text-gray-500">+{user.badges.length - 3}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Available Achievements</CardTitle>
                <CardDescription>Unlock badges by contributing to your community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {achievements.map((achievement) => (
                    <Card key={achievement.id} className="text-center">
                      <CardContent className="pt-6">
                        <div className="text-4xl mb-3">{achievement.icon}</div>
                        <h3 className="font-semibold mb-2">{achievement.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                        <Badge className={getBadgeColor(achievement.rarity)}>{achievement.rarity}</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievement Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-sm text-gray-600">Total Badges Earned</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Trophy className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">23</div>
                  <p className="text-sm text-gray-600">Epic Achievements</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Award className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">89%</div>
                  <p className="text-sm text-gray-600">Completion Rate</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
