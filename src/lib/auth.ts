export type User = {
  id: string
  email: string
  name: string
  password: string // In a real app, this would be hashed
  role: "user" | "admin"
  avatar?: string
  position?: string
}

// Mock users database
const users: User[] = [
  {
    id: "1",
    email: "hilily@gmail.com",
    name: "Lily Jane",
    password: "pass123123",
    role: "user",

    position: "Software Engineer",
  },
  {
    id: "2",
    email: "admin@example.com",
    name: "Admin User",
    password: "admin123",
    role: "admin",

    position: "Administrator",
  },
]

// Session storage key
const SESSION_KEY = "recruitpro_user"

// Mock authentication functions
export const login = async (
  email: string,
  password: string,
): Promise<{ success: boolean; user?: User; error?: string }> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const user = users.find((u) => u.email === email)

  if (!user) {
    return { success: false, error: "User not found" }
  }

  if (user.password !== password) {
    return { success: false, error: "Invalid password" }
  }

  // Store user in session storage
  if (typeof window !== "undefined") {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(user))
  }

  return { success: true, user }
}

export const register = async (
  email: string,
  password: string,
  name: string,
): Promise<{ success: boolean; user?: User; error?: string }> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Check if user already exists
  if (users.some((u) => u.email === email)) {
    return { success: false, error: "Email already in use" }
  }

  // Create new user
  const newUser: User = {
    id: (users.length + 1).toString(),
    email,
    name,
    password,
    role: "user",

    position: "Job Seeker",
  }

  // In a real app, you would add the user to the database
  users.push(newUser)

  // Store user in session storage
  if (typeof window !== "undefined") {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(newUser))
  }

  return { success: true, user: newUser }
}

export const getCurrentUser = (): User | null => {
  // Check session storage for user
  if (typeof window !== "undefined") {
    const userJson = sessionStorage.getItem(SESSION_KEY)
    if (userJson) {
      return JSON.parse(userJson)
    }
  }

  // For demo purposes, we'll return null if no user is found
  return null
}

export const isLoggedIn = (): boolean => {
  return getCurrentUser() !== null
}

export const logout = async (): Promise<{ success: boolean }> => {
  // Clear user from session storage
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(SESSION_KEY)
  }

  await new Promise((resolve) => setTimeout(resolve, 500))
  return { success: true }
}
