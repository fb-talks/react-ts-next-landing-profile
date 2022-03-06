import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://lrijwuqmacnycxfzyaad.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyODExNTU2LCJleHAiOjE5NTgzODc1NTZ9.uilvkBhWB7Krhr9peobLOKWBYypNUKHYsG2OUB6H2L4')
