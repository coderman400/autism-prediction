import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
const ValueCard = () => {
  return (
    <Card className='w-80 text-center ' >
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter className='justify-center'>
                        <p>Card Footer</p>
                    </CardFooter>
    </Card>
  )
}

export default ValueCard