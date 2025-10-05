'use client'

import { useAuth } from '@/hooks/use-auth'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Bell, LogOut, PanelLeft, Search, UserCog, Moon, Sun } from 'lucide-react'
import { useSidebar } from '@/components/ui/sidebar'
import { Input } from '@/components/ui/input'
import { useState, useEffect } from 'react'

export default function AppHeader() {
  const { user, logout, switchRole } = useAuth()
  const { toggleSidebar } = useSidebar()
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    setIsDarkMode(root.classList.contains('dark'));
  }, []);


  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    root.classList.toggle('dark');
    setIsDarkMode(root.classList.contains('dark'));
  }


  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-card px-4 sm:px-6">
        <Button size="icon" variant="outline" className="sm:hidden" onClick={toggleSidebar}>
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
        </Button>

        <div className="hidden sm:flex items-center gap-4">
             <Button variant="ghost" className="text-muted-foreground">Dashboard</Button>
             <Button variant="ghost" className="text-muted-foreground">Emission Reports</Button>
             <Button variant="ghost" className="text-muted-foreground">Plantation Tracker</Button>
             <Button variant="ghost" className="text-muted-foreground">Carbon Credits</Button>
             <Button variant="ghost" className="text-muted-foreground">Carbon Neutrality Index</Button>
             <Button variant="ghost" className="text-muted-foreground">AI/ML Predictions</Button>
             <Button variant="ghost" className="text-muted-foreground">Settings</Button>
        </div>
        
      <div className="ml-auto flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search BlueCred..." className="pl-8 w-full md:w-[200px] lg:w-[300px]" />
        </div>
        
        <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle dark mode</span>
        </Button>

        <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src={`https://avatar.vercel.sh/${user?.email}.png`} alt={user?.companyName} />
                <AvatarFallback>{user ? user.companyName.charAt(0) : 'U'}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{user?.companyName}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => switchRole('industry')}>
                Switch to Industry
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => switchRole('admin')}>
                Switch to Admin
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
