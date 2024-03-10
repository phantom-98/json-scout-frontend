'use server'
 
import { redirect } from 'next/navigation'
 
export default async function navigate(data: FormData) {
  redirect(`/home`)
}
