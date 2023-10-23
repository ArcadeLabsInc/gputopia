import { auth } from '@/auth'
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc', { apiVersion: '2023-10-16' })

export async function POST(request: NextRequest) {
  const session = await auth()
  if (!session) {
    return new NextResponse('Unauthorized', {
      status: 401
    })
  }

  // Assuming the frontend sends the amount in the request body.
  // You should validate the amount here to make sure it's not too high or too low.
  const { amount } = await request.json()

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount, // in smallest currency unit (e.g., cents for USD)
    currency: 'usd' // adjust to your desired currency
    // add any other desired parameters here, like metadata, customer ID, etc.
  })

  console.log('paymentIntent:', paymentIntent)
  console.log('Returning client secret', paymentIntent.client_secret)

  return NextResponse.json({ clientSecret: paymentIntent.client_secret })
}
