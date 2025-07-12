import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-8">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">Admin Panel</h1>
                <p className="mt-2 text-lg text-muted-foreground">Manage the ReWear platform.</p>
            </div>

            <div className="grid gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Pending Item Approvals</CardTitle>
                        <CardDescription>Review and approve or reject new item listings.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Item</TableHead>
                                    <TableHead>User</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead>Points</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">Vintage Denim Jacket</TableCell>
                                    <TableCell>Jane Doe</TableCell>
                                    <TableCell>
                                        <Badge variant="outline">Outerwear</Badge>
                                    </TableCell>
                                    <TableCell>1500</TableCell>
                                    <TableCell className="space-x-2">
                                        <Button variant="outline" size="sm">Approve</Button>
                                        <Button variant="destructive" size="sm">Reject</Button>
                                    </TableCell>
                                </TableRow>
                                 <TableRow>
                                    <TableCell className="font-medium">Floral Summer Dress</TableCell>
                                    <TableCell>Sarah Smith</TableCell>
                                    <TableCell>
                                        <Badge variant="outline">Dresses</Badge>
                                    </TableCell>
                                    <TableCell>1200</TableCell>
                                    <TableCell className="space-x-2">
                                        <Button variant="outline" size="sm">Approve</Button>
                                        <Button variant="destructive" size="sm">Reject</Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Recent Swap Logs</CardTitle>
                        <CardDescription>Monitor the latest swap activities on the platform.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center py-10 text-muted-foreground">
                        <p>No recent swaps to display.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
