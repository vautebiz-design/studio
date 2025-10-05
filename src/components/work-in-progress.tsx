import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Construction } from "lucide-react";

export default function WorkInProgress({ pageName }: { pageName: string }) {
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-full">
      <Card className="w-full max-w-lg text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <Construction className="h-16 w-16 text-primary" />
          </div>
          <CardTitle>Under Construction</CardTitle>
          <CardDescription>
            The "{pageName}" page is currently being built. Please check back later.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-muted-foreground">We are working hard to bring you this feature.</p>
        </CardContent>
      </Card>
    </div>
  );
}
