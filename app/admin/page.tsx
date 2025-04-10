import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Package2, ShoppingCart, MessageCircle, Users } from "lucide-react"

export default function AdminDashboard() {
  // Dashboard stats
  const stats = [
    {
      title: "Total Packages",
      value: "124",
      description: "Available travel packages",
      icon: Package2,
      change: "+12% from last month",
    },
    {
      title: "Active Bookings",
      value: "78",
      description: "Current confirmed bookings",
      icon: ShoppingCart,
      change: "+5% from last month",
    },
    {
      title: "New Messages",
      value: "23",
      description: "Unread customer messages",
      icon: MessageCircle,
      change: "+18% from last month",
    },
    {
      title: "Total Users",
      value: "3,120",
      description: "Registered user accounts",
      icon: Users,
      change: "+3% from last month",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your business metrics and performance</p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
              <CardDescription className="text-xs pt-1">{stat.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
            <CardDescription>Latest customer bookings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="font-medium">Booking #{1000 + i}</p>
                    <p className="text-sm text-muted-foreground">Customer: John Doe</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$1,{i}99.00</p>
                    <p className="text-sm text-muted-foreground">Apr {i + 1}, 2025</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Packages</CardTitle>
            <CardDescription>Most booked travel packages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="font-medium">Weekend Getaway {i}</p>
                    <p className="text-sm text-muted-foreground">{20 + i * 5} bookings this month</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${599 + i * 100}</p>
                    <p className="text-sm text-muted-foreground">3 days</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

