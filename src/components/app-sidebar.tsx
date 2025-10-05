'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BarChart2,
  FileText,
  PanelLeft,
  CircleDollarSign,
  BrainCircuit,
  Settings,
  Scale,
  TreePine,
  ShieldCheck,
} from 'lucide-react'
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'
import { Button } from './ui/button'
import { useSidebar } from '@/components/ui/sidebar'

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: BarChart2 },
  { href: '/reports', label: 'Emission Reports', icon: FileText },
  { href: '/map', label: 'Plantation Tracker', icon: TreePine },
  { href: '/carbon-credits', label: 'Carbon Credits', icon: CircleDollarSign },
  { href: '/carbon-neutrality', label: 'Carbon Neutrality Index', icon: Scale },
  { href: '/ai-predictions', label: 'AI/ML Predictions', icon: BrainCircuit },
  { href: '/settings', label: 'Settings', icon: Settings },
];

const adminNav = [
    { href: '/admin', label: 'Admin Console', icon: ShieldCheck },
]

export default function AppSidebar() {
  const pathname = usePathname()
  const { toggleSidebar, state } = useSidebar();
  
  const items = navItems

  return (
    <Sidebar collapsible="icon" side="left" variant="sidebar">
      <SidebarHeader className="justify-between">
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6 text-primary">
                <rect width="256" height="256" fill="none"/>
                <path d="M128,24a104,104,0,0,0,0,208c57.4,0,104-46.6,104-104S185.4,24,128,24Zm0,184a80,80,0  0,1-80-80,78.8,78.8,0,0,1,22-54.4,80,80,0,0,1,112,0,78.8,78.8,0,0,1,22,54.4A80,80,0,0,1,128,208Z" opacity="0.2"/>
                <path d="M128,24a104,104,0,1,0,104,104A104.2,104.2,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM128,40a88,88,0,0,0-76,46.7,86.6,86.6,0,0,0-12,41.3,88,88,0,0,0,176,0,86.6,86.6,0,0,0-12-41.3A88,88,0,0,0,128,40Z" fill="currentColor"/>
            </svg>
            {state === 'expanded' && <span className="font-semibold text-lg text-foreground">BlueCred</span>}
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8 sm:hidden" onClick={toggleSidebar}>
            <PanelLeft />
            <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.label}>
              <Link href={item.href} passHref>
                <SidebarMenuButton
                  isActive={pathname === item.href}
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
    </Sidebar>
  )
}
