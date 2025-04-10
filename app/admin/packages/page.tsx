import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"

// Sample package data
const packages = [
  {
    id: 1,
    name: "Weekend Getaway",
    description: "A perfect weekend escape to the mountains",
    price: 599,
    duration: "3 days",
    location: "Mountain Resort",
    availability: "Available",
    bookings: 24,
  },
  {
    id: 2,
    name: "Beach Vacation",
    description: "Relax on pristine beaches with luxury accommodations",
    price: 899,
    duration: "5 days",
    location: "Coastal Paradise",
    availability: "Limited",
    bookings: 18,
  },
  {
    id: 3,
    name: "City Explorer",
    description: "Discover the vibrant culture and history of major cities",
    price: 749,
    duration: "4 days",
    location: "Metropolitan Area",
    availability: "Available",
    bookings: 32,
  },
  {
    id: 4,
    name: "Adventure Trek",
    description: "Thrilling outdoor activities for adventure seekers",
    price: 1099,
    duration: "7 days",
    location: "National Park",
    availability: "Available",
    bookings: 15,
  },
]

export default function PackagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Packages</h1>
          <p className="text-muted-foreground">Manage your travel packages and offerings</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Package
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Packages</CardTitle>
          <CardDescription>A list of all available travel packages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Name</th>
                  <th className="text-left py-3 px-4 font-medium">Price</th>
                  <th className="text-left py-3 px-4 font-medium">Duration</th>
                  <th className="text-left py-3 px-4 font-medium">Location</th>
                  <th className="text-left py-3 px-4 font-medium">Availability</th>
                  <th className="text-left py-3 px-4 font-medium">Bookings</th>
                  <th className="text-right py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg) => (
                  <tr key={pkg.id} className="border-b">
                    <td className="py-3 px-4">{pkg.name}</td>
                    <td className="py-3 px-4">${pkg.price}</td>
                    <td className="py-3 px-4">{pkg.duration}</td>
                    <td className="py-3 px-4">{pkg.location}</td>
                    <td className="py-3 px-4">{pkg.availability}</td>
                    <td className="py-3 px-4">{pkg.bookings}</td>
                    <td className="py-3 px-4 text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500">
                        Delete
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

