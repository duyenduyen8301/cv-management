import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "@tanstack/react-router"
import { Eye } from "lucide-react"

export function ApplicationsList() {
  const applications = [
    {
      id: 1,
      position: "Senior Software Engineer",
      company: "Tech Innovate",
      status: "viewed",
      date: "4/15/2023",
    },
    {
      id: 2,
      position: "Full Stack Developer",
      company: "Global Solutions",
      status: "pending",
      date: "4/10/2023",
    },
    {
      id: 3,
      position: "Frontend Engineer",
      company: "NextWave",
      status: "accepted",
      date: "4/5/2023",
    },
    {
      id: 4,
      position: "Backend Developer",
      company: "Innovate Design",
      status: "rejected",
      date: "3/28/2023",
    },
  ]

  return (
    <div className="space-y-4">
      {applications.map((application) => (
        <div key={application.id} className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-gray-200 rounded-md flex-shrink-0 mr-4 flex items-center justify-center">
              <span className="text-darkgreen font-medium">{application.company.charAt(0)}</span>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="font-semibold text-darkgreen">{application.position}</h3>
                <div className="flex items-center">
                  {application.status === "viewed" && (
                    <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-1"></span>
                      Viewed
                    </Badge>
                  )}
                  {application.status === "pending" && (
                    <Badge variant="outline" className="bg-yellow-50 text-yellow-600 border-yellow-200">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-1"></span>
                      Pending
                    </Badge>
                  )}
                  {application.status === "accepted" && (
                    <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-1"></span>
                      Accepted
                    </Badge>
                  )}
                  {application.status === "rejected" && (
                    <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-1"></span>
                      Rejected
                    </Badge>
                  )}
                </div>
              </div>
              <p className="text-darkgreen/70 text-sm mb-3">{application.company}</p>
              <div className="flex justify-between items-center">
                <p className="text-sm text-darkgreen/60">Submitted on {application.date}</p>
                <Link href={`/mypage/applications/${application.id}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs border-darkgreen/20 text-darkgreen hover:bg-darkgreen hover:text-white"
                  >
                    <Eye className="mr-1 h-3 w-3" />
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
