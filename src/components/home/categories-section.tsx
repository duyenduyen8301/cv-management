import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"

  
export default function CategoriesSection() {
  const categories = [
    {
      id: 1,
      name: "Development",
      count: 1429,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Design",
      count: 842,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="13.5" cy="6.5" r=".5" />
          <circle cx="17.5" cy="10.5" r=".5" />
          <circle cx="8.5" cy="7.5" r=".5" />
          <circle cx="6.5" cy="12.5" r=".5" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
      ),
    },
    {
      id: 3,
      name: "Marketing",
      count: 647,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m22 7-4.8 4.8" />
          <path d="M16 7h6v6" />
          <path d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16" />
          <path d="M4 11h.01" />
          <path d="M4 15h.01" />
          <path d="M8 11h.01" />
          <path d="M8 15h.01" />
          <path d="M12 11h.01" />
          <path d="M12 15h.01" />
        </svg>
      ),
    },
    {
      id: 4,
      name: "Management",
      count: 523,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      id: 5,
      name: "IT & Networking",
      count: 673,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="8" height="14" x="8" y="5" rx="1" />
          <path d="M4 5h4" />
          <path d="M4 10h4" />
          <path d="M4 15h4" />
          <path d="M16 5h4" />
          <path d="M16 10h4" />
          <path d="M16 15h4" />
        </svg>
      ),
    },
    {
      id: 6,
      name: "Sales",
      count: 452,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      id: 7,
      name: "Customer Service",
      count: 346,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      id: 8,
      name: "Education",
      count: 253,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-16 bg-lightcream">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-darkgreen mb-4">Popular Categories</h2>
          <p className="text-darkgreen/70 max-w-2xl mx-auto">
            Browse candidates by category to find the perfect match for your team
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/cvs?category=${category.name.toLowerCase()}`}>
              <div className="category-card">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-darkgreen/10 flex items-center justify-center mb-3 text-darkgreen">
                    {category.icon}
                  </div>
                  <h3 className="font-medium text-darkgreen">{category.name}</h3>
                  <p className="text-sm text-darkgreen/60">{category.count} candidates</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button className="bg-darkgreen hover:bg-darkgreen/90">Browse All Categories</Button>
        </div>
      </div>
    </section>
  )
}
