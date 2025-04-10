import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your application settings and preferences</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
          <CardDescription>Configure general application settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Company Information</h3>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-1">Company Name</label>
                <input type="text" className="w-full p-2 border rounded-md text-white" defaultValue="Travel Adventures Inc." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Contact Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md text-white"
                  defaultValue="contact@traveladventures.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input type="text" className="w-full p-2 border rounded-md text-white" defaultValue="+1 (555) 123-4567" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Website</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md text-white"
                  defaultValue="https://traveladventures.com"
                />
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Notification Settings</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive email notifications for new bookings</p>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="email-notifications" defaultChecked className="w-4 h-4" />
                  <label htmlFor="email-notifications" className="text-sm">
                    Enabled
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">SMS Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive SMS alerts for urgent matters</p>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="sms-notifications" className="w-4 h-4" />
                  <label htmlFor="sms-notifications" className="text-sm">
                    Enabled
                  </label>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Security Settings</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                </div>
                <Button variant="outline">Enable</Button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Password Policy</p>
                  <p className="text-sm text-muted-foreground">Require strong passwords for all users</p>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="password-policy" defaultChecked className="w-4 h-4" />
                  <label htmlFor="password-policy" className="text-sm">
                    Enabled
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

