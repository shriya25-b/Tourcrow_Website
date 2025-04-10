import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Sample booking data
const bookings = [
  {
    id: "B1001",
    customer: "John Smith",
    package: "Weekend Getaway",
    date: "Apr 15, 2025",
    amount: 599,
    status: "Confirmed",
    paymentStatus: "Paid",
  },
  {
    id: "B1002",
    customer: "Sarah Johnson",
    package: "Beach Vacation",
    date: "Apr 20, 2025",
    amount: 899,
    status: "Pending",
    paymentStatus: "Partial",
  },
  {
    id: "B1003",
    customer: "Michael Brown",
    package: "City Explorer",
    date: "May 5, 2025",
    amount: 749,
    status: "Confirmed",
    paymentStatus: "Paid",
  },
  {
    id: "B1004",
    customer: "Emily Davis",
    package: "Adventure Trek",
    date: "May 12, 2025",
    amount: 1099,
    status: "Cancelled",
    paymentStatus: "Refunded",
  },
  {
    id: "B1005",
    customer: "Robert Wilson",
    package: "Weekend Getaway",
    date: "May 18, 2025",
    amount: 599,
    status: "Confirmed",
    paymentStatus: "Paid",
  },
]

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Bookings</h1>
        <p className="text-muted-foreground">Manage customer bookings and reservations</p>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Requires confirmation</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Bookings</CardTitle>
          <CardDescription>A list of recent customer bookings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Booking ID</th>
                  <th className="text-left py-3 px-4 font-medium">Customer</th>
                  <th className="text-left py-3 px-4 font-medium">Package</th>
                  <th className="text-left py-3 px-4 font-medium">Date</th>
                  <th className="text-left py-3 px-4 font-medium">Amount</th>
                  <th className="text-left py-3 px-4 font-medium">Status</th>
                  <th className="text-left py-3 px-4 font-medium">Payment</th>
                  <th className="text-right py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-b">
                    <td className="py-3 px-4">{booking.id}</td>
                    <td className="py-3 px-4">{booking.customer}</td>
                    <td className="py-3 px-4">{booking.package}</td>
                    <td className="py-3 px-4">{booking.date}</td>
                    <td className="py-3 px-4">${booking.amount}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          booking.status === "Confirmed"
                            ? "bg-green-100 text-green-800"
                            : booking.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{booking.paymentStatus}</td>
                    <td className="py-3 px-4 text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

