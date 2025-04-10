import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Admin Dashboard</h1>
      <p className="text-lg mb-8 max-w-md">A modern admin dashboard built with Next.js, Tailwind CSS, and TypeScript</p>
      <Link href="/admin">
        <Button size="lg">Go to Dashboard</Button>
      </Link>
    </div>
  )
}

