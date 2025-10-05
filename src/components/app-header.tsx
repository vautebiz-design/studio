'use client'

import { Button } from '@/components/ui/button'
import { Bell, PanelLeft, Search, Moon, Sun } from 'lucide-react'
import { useSidebar } from '@/components/ui/sidebar'
import { Input } from '@/components/ui/input'
import { useState, useEffect } from 'react'

export default function AppHeader() {
  const { toggleSidebar } = useSidebar()
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialIsDark = root.classList.contains('dark');
    setIsDarkMode(initialIsDark);

    const observer = new MutationObserver(() => {
        setIsDarkMode(root.classList.contains('dark'));
    });
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);


  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle('dark');
  }


  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-card px-4 sm:px-6">
        <Button size="icon" variant="outline" className="sm:hidden" onClick={toggleSidebar}>
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
        </Button>
        
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

        <Button>Login</Button>
      </div>
    </header>
  )
}
