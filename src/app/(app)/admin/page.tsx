'use client'

import { useAuth } from '@/hooks/use-auth'
import { useRouter } from 'next/navigation'
import DataVerificationTable from './components/data-verification-table'
import TransactionsList from './components/transactions-list'

export default function AdminPage() {
  const { user } = useAuth()
  const router = useRouter()

  if (user?.role !== 'admin') {
    // Or show a 'not authorized' message
    if(typeof window !== 'undefined'){
      router.push('/dashboard')
    }
    return null
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">Admin Console</h1>
        <p className="text-muted-foreground">
          Manage and verify system data.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <DataVerificationTable />
        <TransactionsList />
      </div>
    </div>
  )
}
