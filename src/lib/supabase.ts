import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Contact form types
export interface ContactSubmission {
  id?: string
  name: string
  email: string
  subject: string
  message: string
  created_at?: string
}

// API functions for contact form
export const submitContactForm = async (data: ContactSubmission) => {
  const { error } = await supabase
    .from('contact_submissions')
    .insert([data])

  if (error) {
    throw error
  }

  return { success: true }
}