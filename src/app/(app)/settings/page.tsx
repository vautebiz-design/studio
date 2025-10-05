import SettingsForm from "./components/settings-form";

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-8">
       <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
            Manage your account settings, preferences, and security.
        </p>
      </div>
      <SettingsForm />
    </div>
  )
}