'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BarChart2,
  FileText,
  Leaf,
  MapPin,
  PanelLeft,
  ShieldCheck,
  CircleDollarSign,
  BrainCircuit,
  Settings,
  Scale
} from 'lucide-react'
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar'
import { useAuth } from '@/hooks/use-auth'
import { Button } from './ui/button'
import { useSidebar } from '@/components/ui/sidebar'

const industryNav = [
  { href: '/dashboard', label: 'Dashboard', icon: BarChart2 },
  { href: '/reports', label: 'Emission Reports', icon: FileText },
  { href: '/map', label: 'Plantation Tracker', icon: MapPin },
  { href: '/carbon-credits', label: 'Carbon Credits', icon: CircleDollarSign },
  { href: '/carbon-neutrality', label: 'Carbon Neutrality Index', icon: Scale },
  { href: '/ai-predictions', label: 'AI/ML Predictions', icon: BrainCircuit },
  { href: '/settings', label: 'Settings', icon: Settings },
]

const adminNav = [
  { href: '/admin', label: 'Admin Console', icon: ShieldCheck },
  { href: '/map', label: 'Blue Carbon Map', icon: MapPin },
]

export default function AppSidebar() {
  const pathname = usePathname()
  const { user } = useAuth()
  const { toggleSidebar } = useSidebar();
  
  const navItems = user?.role === 'admin' ? adminNav : industryNav

  return (
    <Sidebar collapsible="icon" side="left" variant="sidebar">
      <SidebarHeader>
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-primary hover:bg-primary/10">
                    <Leaf className="h-5 w-5" />
                </Button>
                <span className="font-semibold text-lg text-foreground">BlueCred</span>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={toggleSidebar}>
                <PanelLeft />
                <span className="sr-only">Toggle Sidebar</span>
            </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <Link href={item.href} passHref>
                <SidebarMenuButton
                  isActive={pathname.startsWith(item.href)}
                  tooltip={item.label}
                  asChild
                >
                  <a>
                    <item.icon />
                    <span>{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        {/* Can add footer content here if needed */}
      </SidebarFooter>
    </Sidebar>
  )
}
