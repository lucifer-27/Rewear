import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Tag } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  // Mock data, replace with actual user data
  const user = {
    name: "Jane Doe",
    points: 2450,
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-start justify-between gap-4 border-b pb-6 mb-6 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">Welcome, {user.name}</h1>
          <p className="mt-2 text-lg text-muted-foreground">Here's what's happening with your account.</p>
        </div>
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-primary">
                <Tag className="h-5 w-5"/>
                <span className="font-bold text-lg">{user.points.toLocaleString()} Points</span>
            </div>
            <Button asChild>
                <Link href="/add-item">
                    <PlusCircle className="mr-2 h-4 w-4"/>
                    List New Item
                </Link>
            </Button>
        </div>
      </div>

      <Tabs defaultValue="my-items">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
          <TabsTrigger value="my-items">My Items</TabsTrigger>
          <TabsTrigger value="my-swaps">My Swaps</TabsTrigger>
        </TabsList>
        <TabsContent value="my-items">
          <Card>
            <CardHeader>
              <CardTitle>Your Listed Items</CardTitle>
              <CardDescription>Manage the clothes you've put up for exchange.</CardDescription>
            </CardHeader>
            <CardContent className="text-center py-16 text-muted-foreground">
              <p>You haven't listed any items yet.</p>
              <Button variant="link" asChild className="mt-2"><Link href="/add-item">List your first item</Link></Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="my-swaps">
          <Card>
            <CardHeader>
              <CardTitle>Your Swaps</CardTitle>
              <CardDescription>
                Track your pending and completed swaps.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center py-16 text-muted-foreground">
                <p>You have no swap history.</p>
                <Button variant="link" asChild className="mt-2"><Link href="/browse">Start browsing to make a swap</Link></Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
