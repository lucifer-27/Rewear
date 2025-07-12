'use client'

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Tag, User } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import { getUserItems, getUserSwaps, getUserProfile, updateUserProfile } from "@/lib/firebase/firestore";
import type { Item, Swap, UserProfile } from "@/lib/types";
import { ItemCard } from "@/components/item-card";
import { Skeleton } from "@/components/ui/skeleton";
import { SwapCard } from "@/components/swap-card";
import { ProfileForm } from "@/components/profile-form";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const [userItems, setUserItems] = useState<Item[]>([]);
  const [userSwaps, setUserSwaps] = useState<Swap[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [itemsLoading, setItemsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (user) {
        setItemsLoading(true);
        const [items, swaps, profile] = await Promise.all([
          getUserItems(user.uid),
          getUserSwaps(user.uid),
          getUserProfile(user.uid)
        ]);
        setUserItems(items);
        setUserSwaps(swaps);
        setUserProfile(profile);
        setItemsLoading(false);
      }
    }
    fetchData();
  }, [user]);

  const handleProfileUpdate = async (data: Partial<UserProfile>) => {
    if (user && userProfile) {
        await updateUserProfile(user.uid, data);
        setUserProfile({...userProfile, ...data});
    }
  }

  if (loading) {
    return (
       <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-start justify-between gap-4 border-b pb-6 mb-6 sm:flex-row sm:items-center">
            <div className="space-y-2">
                <Skeleton className="h-12 w-80" />
                <Skeleton className="h-6 w-96" />
            </div>
            <div className="flex items-center gap-4">
                <Skeleton className="h-10 w-32" />
                <Skeleton className="h-10 w-36" />
            </div>
        </div>
        <Skeleton className="h-10 w-[400px] mb-2" />
        <Skeleton className="h-64 w-full" />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-start justify-between gap-4 border-b pb-6 mb-6 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">Welcome, {user?.displayName || 'User'}</h1>
          <p className="mt-2 text-lg text-muted-foreground">Here's what's happening with your account.</p>
        </div>
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-primary">
                <Tag className="h-5 w-5"/>
                <span className="font-bold text-lg">{(userProfile?.points || 0).toLocaleString()} Points</span>
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
        <TabsList className="grid w-full grid-cols-3 md:w-[600px]">
          <TabsTrigger value="my-items">My Items</TabsTrigger>
          <TabsTrigger value="my-swaps">My Swaps</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>
        <TabsContent value="my-items">
          <Card>
            <CardHeader>
              <CardTitle>Your Listed Items</CardTitle>
              <CardDescription>Manage the clothes you've put up for exchange.</CardDescription>
            </CardHeader>
            <CardContent>
              {itemsLoading ? (
                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="space-y-2">
                        <Skeleton className="h-[350px] w-full" />
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                      </div>
                    ))}
                  </div>
              ) : userItems.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {userItems.map(item => (
                    <ItemCard key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 text-muted-foreground">
                  <p>You haven't listed any items yet.</p>
                  <Button variant="link" asChild className="mt-2"><Link href="/add-item">List your first item</Link></Button>
                </div>
              )}
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
            <CardContent className="space-y-4">
                {itemsLoading ? (
                    <Skeleton className="h-40 w-full" />
                ) : userSwaps.length > 0 ? (
                    userSwaps.map(swap => (
                        <SwapCard key={swap.id} swap={swap} currentUserId={user!.uid} />
                    ))
                ) : (
                    <div className="text-center py-16 text-muted-foreground">
                        <p>You have no swap history.</p>
                        <Button variant="link" asChild className="mt-2"><Link href="/browse">Start browsing to make a swap</Link></Button>
                    </div>
                )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="profile">
            <ProfileForm profile={userProfile} onSave={handleProfileUpdate} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
