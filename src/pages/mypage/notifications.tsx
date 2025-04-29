import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bell, Eye, Briefcase, MessageSquare, Star, Settings } from "lucide-react"

// Mock data for notifications
const mockNotifications = {
  today: [
    {
      id: 1,
      type: "view",
      title: "Your CV was viewed by Tech Innovate",
      time: "2 hours ago",
      read: false,
      icon: <Eye className="h-4 w-4" />,
    },
    {
      id: 2,
      type: "message",
      title: "New message from Tech Innovate",
      description: "Thank you for your application. We would like to schedule an interview.",
      time: "4 hours ago",
      read: false,
      icon: <MessageSquare className="h-4 w-4" />,
    },
  ],
  yesterday: [
    {
      id: 3,
      type: "application",
      title: "Your application for Frontend Engineer was accepted",
      time: "1 day ago",
      read: true,
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      id: 4,
      type: "message",
      title: "New message from Global Solutions",
      description: "Your profile matches our requirements for the Full Stack Developer position.",
      time: "1 day ago",
      read: true,
      icon: <MessageSquare className="h-4 w-4" />,
    },
  ],
  earlier: [
    {
      id: 5,
      type: "view",
      title: "Your CV was viewed by NextWave",
      time: "3 days ago",
      read: true,
      icon: <Eye className="h-4 w-4" />,
    },
    {
      id: 6,
      type: "favorite",
      title: "Your profile was saved by Innovate Design",
      time: "5 days ago",
      read: true,
      icon: <Star className="h-4 w-4" />,
    },
    {
      id: 7,
      type: "settings",
      title: "Your account settings were updated",
      time: "1 week ago",
      read: true,
      icon: <Settings className="h-4 w-4" />,
    },
  ],
}

export default function NotificationsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-darkgreen">Notifications</h1>
          <p className="text-darkgreen/70">Stay updated with your activity and messages</p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="bg-darkgreen/5 text-darkgreen border-darkgreen/20">
            <Bell className="h-4 w-4 mr-1" />
            {mockNotifications.today.filter((n) => !n.read).length} Unread
          </Badge>
          <Button variant="outline" className="border-darkgreen/20 text-darkgreen hover:bg-darkgreen hover:text-white">
            Mark All as Read
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader className="px-6 py-4 border-b">
              <CardTitle className="text-lg text-darkgreen">Today</CardTitle>
            </CardHeader>
            <CardContent className="p-0 divide-y divide-gray-100">
              {mockNotifications.today.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 flex items-start ${notification.read ? "" : "bg-darkgreen/5"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3 ${
                      notification.type === "view"
                        ? "bg-blue-100 text-blue-600"
                        : notification.type === "message"
                          ? "bg-yellow-100 text-yellow-600"
                          : notification.type === "application"
                            ? "bg-green-100 text-green-600"
                            : notification.type === "favorite"
                              ? "bg-purple-100 text-purple-600"
                              : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {notification.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-darkgreen font-medium">{notification.title}</p>
                    {notification.description && (
                      <p className="text-sm text-darkgreen/70 mt-1">{notification.description}</p>
                    )}
                    <p className="text-xs text-darkgreen/60 mt-1">{notification.time}</p>
                  </div>
                  {!notification.read && <div className="w-2 h-2 bg-accent2 rounded-full flex-shrink-0"></div>}
                </div>
              ))}
            </CardContent>

            <CardHeader className="px-6 py-4 border-b border-t">
              <CardTitle className="text-lg text-darkgreen">Yesterday</CardTitle>
            </CardHeader>
            <CardContent className="p-0 divide-y divide-gray-100">
              {mockNotifications.yesterday.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 flex items-start ${notification.read ? "" : "bg-darkgreen/5"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3 ${
                      notification.type === "view"
                        ? "bg-blue-100 text-blue-600"
                        : notification.type === "message"
                          ? "bg-yellow-100 text-yellow-600"
                          : notification.type === "application"
                            ? "bg-green-100 text-green-600"
                            : notification.type === "favorite"
                              ? "bg-purple-100 text-purple-600"
                              : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {notification.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-darkgreen font-medium">{notification.title}</p>
                    {notification.description && (
                      <p className="text-sm text-darkgreen/70 mt-1">{notification.description}</p>
                    )}
                    <p className="text-xs text-darkgreen/60 mt-1">{notification.time}</p>
                  </div>
                  {!notification.read && <div className="w-2 h-2 bg-accent2 rounded-full flex-shrink-0"></div>}
                </div>
              ))}
            </CardContent>

            <CardHeader className="px-6 py-4 border-b border-t">
              <CardTitle className="text-lg text-darkgreen">Earlier</CardTitle>
            </CardHeader>
            <CardContent className="p-0 divide-y divide-gray-100">
              {mockNotifications.earlier.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 flex items-start ${notification.read ? "" : "bg-darkgreen/5"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3 ${
                      notification.type === "view"
                        ? "bg-blue-100 text-blue-600"
                        : notification.type === "message"
                          ? "bg-yellow-100 text-yellow-600"
                          : notification.type === "application"
                            ? "bg-green-100 text-green-600"
                            : notification.type === "favorite"
                              ? "bg-purple-100 text-purple-600"
                              : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {notification.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-darkgreen font-medium">{notification.title}</p>
                    {notification.description && (
                      <p className="text-sm text-darkgreen/70 mt-1">{notification.description}</p>
                    )}
                    <p className="text-xs text-darkgreen/60 mt-1">{notification.time}</p>
                  </div>
                  {!notification.read && <div className="w-2 h-2 bg-accent2 rounded-full flex-shrink-0"></div>}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="unread">
          <Card>
            <CardHeader className="px-6 py-4 border-b">
              <CardTitle className="text-lg text-darkgreen">Unread Notifications</CardTitle>
            </CardHeader>
            <CardContent className="p-0 divide-y divide-gray-100">
              {[...mockNotifications.today, ...mockNotifications.yesterday, ...mockNotifications.earlier]
                .filter((n) => !n.read)
                .map((notification) => (
                  <div key={notification.id} className="p-4 flex items-start bg-darkgreen/5">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3 ${
                        notification.type === "view"
                          ? "bg-blue-100 text-blue-600"
                          : notification.type === "message"
                            ? "bg-yellow-100 text-yellow-600"
                            : notification.type === "application"
                              ? "bg-green-100 text-green-600"
                              : notification.type === "favorite"
                                ? "bg-purple-100 text-purple-600"
                                : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {notification.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-darkgreen font-medium">{notification.title}</p>
                      {notification.description && (
                        <p className="text-sm text-darkgreen/70 mt-1">{notification.description}</p>
                      )}
                      <p className="text-xs text-darkgreen/60 mt-1">{notification.time}</p>
                    </div>
                    <div className="w-2 h-2 bg-accent2 rounded-full flex-shrink-0"></div>
                  </div>
                ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages">
          <Card>
            <CardHeader className="px-6 py-4 border-b">
              <CardTitle className="text-lg text-darkgreen">Message Notifications</CardTitle>
            </CardHeader>
            <CardContent className="p-0 divide-y divide-gray-100">
              {[...mockNotifications.today, ...mockNotifications.yesterday, ...mockNotifications.earlier]
                .filter((n) => n.type === "message")
                .map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 flex items-start ${notification.read ? "" : "bg-darkgreen/5"}`}
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3 bg-yellow-100 text-yellow-600">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-darkgreen font-medium">{notification.title}</p>
                      {notification.description && (
                        <p className="text-sm text-darkgreen/70 mt-1">{notification.description}</p>
                      )}
                      <p className="text-xs text-darkgreen/60 mt-1">{notification.time}</p>
                    </div>
                    {!notification.read && <div className="w-2 h-2 bg-accent2 rounded-full flex-shrink-0"></div>}
                  </div>
                ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="applications">
          <Card>
            <CardHeader className="px-6 py-4 border-b">
              <CardTitle className="text-lg text-darkgreen">Application Notifications</CardTitle>
            </CardHeader>
            <CardContent className="p-0 divide-y divide-gray-100">
              {[...mockNotifications.today, ...mockNotifications.yesterday, ...mockNotifications.earlier]
                .filter((n) => n.type === "application")
                .map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 flex items-start ${notification.read ? "" : "bg-darkgreen/5"}`}
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3 bg-green-100 text-green-600">
                      <Briefcase className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-darkgreen font-medium">{notification.title}</p>
                      {notification.description && (
                        <p className="text-sm text-darkgreen/70 mt-1">{notification.description}</p>
                      )}
                      <p className="text-xs text-darkgreen/60 mt-1">{notification.time}</p>
                    </div>
                    {!notification.read && <div className="w-2 h-2 bg-accent2 rounded-full flex-shrink-0"></div>}
                  </div>
                ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
