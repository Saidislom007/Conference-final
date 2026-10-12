
import { LoginForm } from "@/components/LoginForm"
import Navbar from "@/components/Navbar"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </main>
    </div>
  )
}