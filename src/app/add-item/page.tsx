'use client'

import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Upload, Loader2, Wand2 } from 'lucide-react'
import { getValuation } from './actions'
import { useToast } from '@/hooks/use-toast'
import { SmartValuationBadge } from '@/components/smart-valuation-badge'

const formSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters long'),
  category: z.enum(['Tops', 'Bottoms', 'Dresses', 'Outerwear', 'Accessories', 'Shoes']),
  condition: z.enum(['New with tags', 'Like new', 'Good', 'Fair']),
  brand: z.string().optional(),
  description: z.string().min(10, 'Description is too short'),
  points: z.coerce.number().min(1, 'Points must be at least 1'),
})

type FormValues = z.infer<typeof formSchema>

export default function AddItemPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isValuating, setIsValuating] = useState(false)
  const [valuation, setValuation] = useState<{ suggestedPoints: number; originalPrice?: number } | null>(null)
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      brand: '',
    },
  })

  const handleAutoValue = async () => {
    const { title, category } = form.getValues()
    if (!title || !category) {
      toast({
        title: 'Missing Information',
        description: 'Please enter a title and select a category to use auto-valuation.',
        variant: 'destructive',
      })
      return
    }

    setIsValuating(true)
    setValuation(null)
    try {
      const result = await getValuation({ title, category })
      if ('error' in result) {
        throw new Error(result.error)
      }
      setValuation(result)
      form.setValue('points', result.suggestedPoints)
      toast({
        title: 'Valuation Complete!',
        description: `We suggest ${result.suggestedPoints} points for this item.`,
      })
    } catch (error) {
      toast({
        title: 'Valuation Failed',
        description: (error as Error).message,
        variant: 'destructive',
      })
    } finally {
      setIsValuating(false)
    }
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true)
    console.log(data)
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
    toast({
      title: 'Item Listed!',
      description: 'Your item has been successfully listed for swapping.',
    })
    form.reset()
    setValuation(null)
    setIsLoading(false)
  }

  return (
    <div className="container mx-auto max-w-2xl py-12 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl">List a New Item</CardTitle>
          <CardDescription>Fill out the details below to add your clothing to the exchange.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex h-32 items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/50 bg-muted/20">
                  <div className="text-center">
                    <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Drag & drop up to 5 images or click to upload</p>
                  </div>
                </div>
              </div>

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Vintage Blue Denim Jacket" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Tops">Tops</SelectItem>
                          <SelectItem value="Bottoms">Bottoms</SelectItem>
                          <SelectItem value="Dresses">Dresses</SelectItem>
                          <SelectItem value="Outerwear">Outerwear</SelectItem>
                          <SelectItem value="Accessories">Accessories</SelectItem>
                          <SelectItem value="Shoes">Shoes</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="condition"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Condition</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select condition" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="New with tags">New with tags</SelectItem>
                          <SelectItem value="Like new">Like new</SelectItem>
                          <SelectItem value="Good">Good</SelectItem>
                          <SelectItem value="Fair">Fair</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Brand (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Levi's" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us about your item..." className="min-h-[100px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="space-y-4 rounded-lg border bg-card p-4">
                 <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-grow">
                        <FormField
                            control={form.control}
                            name="points"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Redeem Value (in Points)</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Enter point value" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="pt-1 sm:pt-8 sm:pl-4">
                        <Button type="button" variant="outline" onClick={handleAutoValue} disabled={isValuating}>
                            {isValuating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                            Auto-value
                        </Button>
                    </div>
                </div>
                {valuation && <SmartValuationBadge originalPrice={valuation.originalPrice || 0} points={valuation.suggestedPoints} />}
              </div>


              <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                List Item
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
