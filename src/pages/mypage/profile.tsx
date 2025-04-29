import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function ProfilePage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-darkgreen">My Profile</h1>
          <p className="text-darkgreen/70">Manage your personal information and preferences</p>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <p className="text-sm text-darkgreen/70 mb-1">Profile Completion</p>
            <div className="flex items-center">
              <Progress value={85} className="h-2 w-40 mr-2">
                <div className="h-full bg-darkgreen rounded-full" style={{ width: "85%" }}></div>
              </Progress>
              <span className="text-sm font-medium text-darkgreen">85%</span>
            </div>
          </div>
          <Button className="bg-darkgreen hover:bg-darkgreen/90">Save Changes</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-darkgreen">Profile Photo</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Avatar className="h-32 w-32 mb-6">
                <AvatarImage src="" alt="John Smith" />
                <AvatarFallback className="bg-darkgreen text-white text-2xl">JS</AvatarFallback>
              </Avatar>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  className="border-darkgreen/20 text-darkgreen hover:bg-darkgreen hover:text-white"
                >
                  Upload Photo
                </Button>
                <Button
                  variant="outline"
                  className="border-darkgreen/20 text-red-500 hover:bg-red-50 hover:text-red-600"
                >
                  Remove
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg text-darkgreen">Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" value="john.smith@example.com" readOnly className="bg-gray-50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value="********" readOnly className="bg-gray-50" />
              </div>
              <Button
                variant="outline"
                className="w-full border-darkgreen/20 text-darkgreen hover:bg-darkgreen hover:text-white"
              >
                Change Password
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-darkgreen">Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" defaultValue="Smith" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="headline">Professional Headline</Label>
                <Input id="headline" defaultValue="Software Engineer" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" defaultValue="New York, NY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="+1 (555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" defaultValue="www.johnsmith.dev" />
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg text-darkgreen">Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                className="min-h-[150px]"
                defaultValue="Experienced software engineer with 8+ years of expertise in building scalable web applications. Proficient in JavaScript, TypeScript, React, and Node.js. Passionate about clean code and user-centric design."
              />
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg text-darkgreen">Social Profiles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input id="linkedin" defaultValue="linkedin.com/in/johnsmith" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="github">GitHub</Label>
                <Input id="github" defaultValue="github.com/johnsmith" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter</Label>
                <Input id="twitter" defaultValue="twitter.com/johnsmith" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
