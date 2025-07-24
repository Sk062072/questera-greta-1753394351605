import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://bydsvxsefjvlaetjuejx.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5ZHN2eHNlZmp2bGFldGp1ZWp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3MjQ2MjQsImV4cCI6MjA2NjMwMDYyNH0.Sf2ckOB6cvpTtGpAQwEuRzcRgboKPTDCH4dW9kIOqEE'

if(SUPABASE_URL === 'https://<PROJECT-ID>.supabase.co' || SUPABASE_ANON_KEY === '<ANON_KEY>') {
  throw new Error('Missing Supabase variables');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
})