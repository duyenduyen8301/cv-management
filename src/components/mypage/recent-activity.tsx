export function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "view",
      message: "Your CV was viewed by Tech Innovate",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "accept",
      message: "Your application for Frontend Engineer was accepted",
      time: "1 day ago",
    },
    {
      id: 3,
      type: "message",
      message: "You received a message from Global Solutions",
      time: "2 days ago",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3 ${
              activity.type === "view"
                ? "bg-blue-100 text-blue-600"
                : activity.type === "accept"
                  ? "bg-green-100 text-green-600"
                  : "bg-yellow-100 text-yellow-600"
            }`}
          >
            {activity.type === "view" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
            {activity.type === "accept" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            )}
            {activity.type === "message" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            )}
          </div>
          <div>
            <p className="text-darkgreen">{activity.message}</p>
            <p className="text-sm text-darkgreen/60">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
