import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Sample message data
const messages = [
  {
    id: 1,
    sender: "John Smith",
    email: "john.smith@example.com",
    subject: "Booking Inquiry",
    message: "I'm interested in the Weekend Getaway package. Do you have availability for next month?",
    date: "Apr 3, 2025",
    status: "Unread",
  },
  {
    id: 2,
    sender: "Sarah Johnson",
    email: "sarah.j@example.com",
    subject: "Cancellation Policy",
    message: "Could you please provide details about your cancellation policy for the Beach Vacation package?",
    date: "Apr 2, 2025",
    status: "Read",
  },
  {
    id: 3,
    sender: "Michael Brown",
    email: "michael.b@example.com",
    subject: "Special Requirements",
    message: "I have some dietary restrictions. Can you accommodate these during the City Explorer tour?",
    date: "Apr 1, 2025",
    status: "Replied",
  },
  {
    id: 4,
    sender: "Emily Davis",
    email: "emily.d@example.com",
    subject: "Payment Issue",
    message: "I'm having trouble completing the payment for my Adventure Trek booking. Can you help?",
    date: "Mar 30, 2025",
    status: "Unread",
  },
  {
    id: 5,
    sender: "Robert Wilson",
    email: "robert.w@example.com",
    subject: "Group Discount",
    message: "We are a group of 8 people interested in the Weekend Getaway. Do you offer group discounts?",
    date: "Mar 28, 2025",
    status: "Read",
  },
]

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
        <p className="text-muted-foreground">Manage customer inquiries and communications</p>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Messages</CardTitle>
          <CardDescription>Customer inquiries and communications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">{message.subject}</h3>
                    <p className="text-sm text-muted-foreground">
                      From: {message.sender} ({message.email})
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs mr-2 ${
                        message.status === "Unread"
                          ? "bg-blue-100 text-blue-800"
                          : message.status === "Replied"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {message.status}
                    </span>
                    <span className="text-xs text-muted-foreground">{message.date}</span>
                  </div>
                </div>
                <p className="text-sm mb-3">{message.message}</p>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">
                    Mark as Read
                  </Button>
                  <Button size="sm">Reply</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

