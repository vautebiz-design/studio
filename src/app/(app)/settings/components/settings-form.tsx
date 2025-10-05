'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';

export default function SettingsForm() {
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
    <div className="space-y-8">
        <Card>
            <CardHeader>
                <CardTitle>General Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                    <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={toggleDarkMode} />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="english">
                        <SelectTrigger id="language" className="w-[180px]">
                            <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="english">English</SelectItem>
                            <SelectItem value="spanish">Spanish</SelectItem>
                            <SelectItem value="french">French</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Account Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" placeholder="Enter current password" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" placeholder="Enter new password" />
                </div>
                <Button>Update Password</Button>
                <Separator />
                <div className="flex items-center justify-between">
                    <Label htmlFor="2fa">Two-Factor Authentication</Label>
                    <Switch id="2fa" />
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                    <Checkbox id="email-notifications" defaultChecked/>
                    <Label htmlFor="email-notifications">Receive email notifications for critical alerts</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="in-app-alerts" defaultChecked/>
                    <Label htmlFor="in-app-alerts">Show in-app alerts for updates</Label>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>System Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                    <Label htmlFor="export-format">Default Data Export Format</Label>
                    <Select defaultValue="csv">
                        <SelectTrigger id="export-format" className="w-[180px]">
                            <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="csv">CSV</SelectItem>
                            <SelectItem value="pdf">PDF</SelectItem>
                            <SelectItem value="xlsx">XLSX</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                    <Label htmlFor="log-level">Application Log Level</Label>
                    <Select defaultValue="info">
                        <SelectTrigger id="log-level" className="w-[180px]">
                            <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="info">Info</SelectItem>
                            <SelectItem value="warn">Warning</SelectItem>
                            <SelectItem value="error">Error</SelectItem>
                            <SelectItem value="debug">Debug</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}