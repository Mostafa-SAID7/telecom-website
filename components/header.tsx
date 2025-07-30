import { Button } from "@/components/ui/button"
import { Menu, Phone, Search, User } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                NexTel
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                Mobile
              </Link>
              <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                Broadband
              </Link>
              <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                Business
              </Link>
              <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                Support
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Button className="hidden md:flex bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
